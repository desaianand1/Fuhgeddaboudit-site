type Theme = "light" | "dark";

export function initializeThemeToggler(initialTheme: Theme) {
    const themeToggler = <HTMLInputElement>(
        document.getElementById("theme-toggle-switch")
    );
    themeToggler.disabled = false;
    if (initialTheme === "dark") {
        themeToggler.checked = false;
    } else {
        themeToggler.checked = true;
    }
    themeToggler.addEventListener("change", onThemeToggled);
}

function onThemeToggled(event: Event) {
    const toggleSwitch = <HTMLInputElement>event.target;
    saveThemePreference(toggleSwitch, toggleSwitch.checked);
    setSavedTheme();
}
function saveThemePreference(
    toggleSwitch: HTMLInputElement,
    isToggled: boolean
) {
    const themeValue: Theme = isToggled ? "light" : "dark";
    try {
        localStorage.setItem("theme", themeValue);
    } catch (error) {
        toggleSwitch.disabled = true;
    }
}
/**
 *  sets html theme based on saved theme value. If no theme was previously saved to localstorage, defaults to system-preferred theme
 * @returns Theme: "light" | "dark"
 */
export function setSavedTheme(): Theme {
    const savedTheme: string | null = localStorage.getItem("theme");

    if (savedTheme === null) {
        if (window.matchMedia("(prefers-color-scheme: dark)")) {
            document.documentElement.classList.add("dark");
            return "dark";
        } else {
            document.documentElement.classList.remove("dark");
            return "light";
        }
    } else {
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.style.colorScheme = "dark";
            return "dark";
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.style.colorScheme = "light";
            return "light";
        }
    }
}
