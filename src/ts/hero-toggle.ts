import { setHeroHeadline, setHeroImage } from "./hero";

export function initializeHeroToggler() {
    const toggleSwitch = <HTMLInputElement>(
        document.getElementById("toggle-switch")
    );
    toggleSwitch.addEventListener("change", onToggled);
    setHeroHeadline(toggleSwitch.checked);
    setHeroImage(toggleSwitch.checked);
}

export function onToggled(event: Event) {
    const toggleSwitch = <HTMLInputElement>event.target;
    setHeroHeadline(toggleSwitch.checked);
    setHeroImage(toggleSwitch.checked);
}
