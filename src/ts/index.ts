import { setHeadline } from "./headline";
import exampleBeforeImage from "../assets/hero/example-before.png";
import exampleAfterImage from "../assets/hero/example-after.png";

function onDOMLoaded(): void {
    const toggleSwitch = <HTMLInputElement>(
        document.getElementById("toggle-switch")
    );
    const heroImage = <HTMLImageElement>document.getElementById("example-img");
    toggleSwitch.addEventListener("change", onToggledCurried(heroImage));
    setHeadline(toggleSwitch.checked);
    heroImage.src = getHeroImageSrc(toggleSwitch.checked);
}

function onToggled(event: Event, heroImage: HTMLImageElement) {
    const toggleSwitch = <HTMLInputElement>event.target;
    setHeadline(toggleSwitch.checked);
    heroImage.src = getHeroImageSrc(toggleSwitch.checked);
}

function onToggledCurried(heroImage: HTMLImageElement) {
    return function onToggleWrapper(event: Event) {
        onToggled(event, heroImage);
    };
}

function getHeroImageSrc(isToggled: boolean): string {
    return isToggled ? exampleAfterImage : exampleBeforeImage;
}
document.addEventListener("DOMContentLoaded", onDOMLoaded);
