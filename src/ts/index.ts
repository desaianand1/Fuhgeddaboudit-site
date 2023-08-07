import { initializeThemeToggler, setSavedTheme } from "./theme-toggle";
import { initializeHeroToggler } from "./hero-toggle";

function onDOMLoaded(): void {
    const initialTheme = setSavedTheme();
    initializeThemeToggler(initialTheme);
    initializeHeroToggler();
}

document.addEventListener("DOMContentLoaded", onDOMLoaded);
