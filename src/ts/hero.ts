function setHeroHeadline(isToggled: boolean) {
    const toggledOnHeadline = document.getElementById("headline-toggled-on");
    const toggledOffHeadline = document.getElementById("headline-toggled-off");
    if (isToggled) {
        toggledOnHeadline?.classList.remove("hidden");
        toggledOnHeadline?.classList.add("visible", "flex");
        toggledOffHeadline?.classList.remove("visible", "flex");
        toggledOffHeadline?.classList.add("hidden");
    } else {
        toggledOffHeadline?.classList.remove("hidden");
        toggledOffHeadline?.classList.add("visible", "flex");
        toggledOnHeadline?.classList.remove("visible", "flex");
        toggledOnHeadline?.classList.add("hidden");
    }
}

function setHeroImage(isToggled: boolean) {
    const heroImgBefore = document.getElementById("hero-img-before");
    const heroImageAfter = document.getElementById("hero-img-after");
    if (isToggled) {
        heroImgBefore?.classList.replace("visible", "hidden");
        heroImageAfter?.classList.replace("hidden", "visible");
    } else {
        heroImgBefore?.classList.replace("hidden", "visible");
        heroImageAfter?.classList.replace("visible", "hidden");
    }
}

export { setHeroHeadline, setHeroImage };
