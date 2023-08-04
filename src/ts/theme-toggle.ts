type UserTheme = "light" | "dark" | null;

export function initializeThemeToggler() {
    const themeToggler = <HTMLInputElement>(
        document.getElementById("theme-toggle-switch")
    );
    themeToggler.addEventListener("change", onThemeToggled);
}

export function onThemeToggled(event: Event) {
    const f = 3;
}

export function setSavedThemePreference() {
    //     const currentTheme : UserTheme = localStorage.getItem('theme');
    // if (currentTheme !==null) {
    //     document.documentElement.setAttribute('data-theme', currentTheme);
    //     if (currentTheme === 'dark') {
    //         toggleSwitch.checked = true;
    //     }
    // }
}
