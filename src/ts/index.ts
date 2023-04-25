function onDOMLoaded(): void {
  console.log("js ran");
  const toggleSwitch = <HTMLInputElement>(
    document.getElementById("toggle-switch")
  );
  toggleSwitch.addEventListener("change", onToggled);
}

function onToggled(event: Event) {
  const toggleSwitch = <HTMLInputElement>event.target;
  if (toggleSwitch.checked) {
    console.log("checked");
  } else {
    console.log("not checked");
  }
}
document.addEventListener("DOMContentLoaded", onDOMLoaded);
