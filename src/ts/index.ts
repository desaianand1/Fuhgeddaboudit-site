import { initializeThemeToggler } from "./theme-toggle";
import { initializeHeroToggler } from "./hero-toggle";

function onDOMLoaded(): void {
    initializeThemeToggler();
    initializeHeroToggler();
}

document.addEventListener("DOMContentLoaded", onDOMLoaded);
