import { setHeadline } from "./headline";

function onDOMLoaded(): void {
  const toggleSwitch = <HTMLInputElement>(
    document.getElementById("toggle-switch")
  );
  toggleSwitch.addEventListener("change", onToggled);
}

function onToggled(event: Event) {
  const toggleSwitch = <HTMLInputElement>event.target;
  setHeadline(toggleSwitch.checked);
}
document.addEventListener("DOMContentLoaded", onDOMLoaded);
