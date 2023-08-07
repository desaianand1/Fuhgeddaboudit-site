import { setHeroHeadline, setHeroImage } from "./hero";

export function initializeHeroToggler() {
    const toggleSwitch = <HTMLInputElement>(
        document.getElementById("toggle-switch")
    );
    toggleSwitch.addEventListener("change", onToggled);
    setHeroHeadline(toggleSwitch.checked);
    setHeroImage(toggleSwitch.checked);
}

function onToggled(event: Event) {
    function toggleState() {
        const toggleSwitch = <HTMLInputElement>event.target;
        setHeroHeadline(toggleSwitch.checked);
        setHeroImage(toggleSwitch.checked);
    }
    setTimeout(toggleState, 250);
}
