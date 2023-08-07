function setHeroHeadline(isToggled: boolean) {
    const toggledOnHeadline = document.getElementById("headline-toggled-on");
    const toggledOffHeadline = document.getElementById("headline-toggled-off");
    if (isToggled) {
        toggledOffHeadline?.classList.replace("visible", "invisible");
        toggledOnHeadline?.classList.replace("invisible", "visible");
        toggledOffHeadline?.classList.replace("relative", "absolute");
        toggledOnHeadline?.classList.replace("absolute", "relative");
    } else {
        toggledOffHeadline?.classList.replace("invisible", "visible");
        toggledOnHeadline?.classList.replace("visible", "invisible");
        toggledOffHeadline?.classList.replace("absolute", "relative");
        toggledOnHeadline?.classList.replace("relative", "absolute");
    }
}

function setHeroImage(isToggled: boolean) {
    const heroImgBefore = document.getElementById("hero-img-before");
    const heroImageAfter = document.getElementById("hero-img-after");
    if (isToggled) {
        heroImgBefore?.classList.replace("visible", "invisible");
        heroImageAfter?.classList.replace("invisible", "visible");
        heroImgBefore?.classList.replace("relative", "absolute");
        heroImageAfter?.classList.replace("absolute", "relative");
    } else {
        heroImgBefore?.classList.replace("invisible", "visible");
        heroImageAfter?.classList.replace("visible", "invisible");
        heroImgBefore?.classList.replace("absolute", "relative");
        heroImageAfter?.classList.replace("relative", "absolute");
    }
}

export { setHeroHeadline, setHeroImage };
