import headlinePhrases from "./headline-phrases.json";

interface ToggledOffPhrase {
    text: string | null;
    webp: string;
    gif: string;
    alt: {
        emoji: string;
    };
}

interface ToggledOnPhrase extends ToggledOffPhrase {
    highlighted: string;
}

const headlineContainer: HTMLDivElement = <HTMLDivElement>(
    document.querySelector("div#headline-container")
);

function setHeadline(isToggled: boolean) {
    const headlineSpan = headlineContainer.querySelector(
        "span#headline-text"
    ) as HTMLSpanElement;
    if (headlineSpan === null) {
        console.log(headlineContainer.childNodes);
        const headline = instantiateHeadlineTemplate();
        headlineContainer.appendChild(headline);
    }
    setHeadlineContent(isToggled, headlineSpan);
}

function instantiateHeadlineTemplate(): HTMLElement {
    const headlineTemplate: HTMLTemplateElement = <HTMLTemplateElement>(
        document.querySelector("template#headline")
    );
    return headlineTemplate.content.cloneNode(true) as HTMLElement;
}

function setHeadlineContent(isToggled: boolean, headlineSpan: HTMLSpanElement) {
    const picSrc = headlineContainer.querySelector(
        "picture.emoji>source"
    ) as HTMLSourceElement;
    const picImg = headlineContainer.querySelector(
        "picture.emoji>img"
    ) as HTMLImageElement;
    if (isToggled) {
        const toggledOnPhrase: ToggledOnPhrase = headlinePhrases["toggled-on"];
        setToggledOnHeadlineContent(
            toggledOnPhrase,
            headlineSpan,
            picImg,
            picSrc
        );
    } else {
        const toggledOffPhrase: ToggledOffPhrase =
            headlinePhrases["toggled-off"];
        setToggledOffHeadlineContent(
            toggledOffPhrase,
            headlineSpan,
            picImg,
            picSrc
        );
    }
}

function setToggledOffHeadlineContent(
    phrase: ToggledOffPhrase,
    headlineSpan: Element,
    picImg: HTMLImageElement,
    picSrc: HTMLSourceElement
) {
    headlineSpan.classList.add("deemphasized-text");
    const emphasizedSpan = headlineSpan.querySelector("span.emphasized-text");
    if (emphasizedSpan !== null) {
        headlineSpan.removeChild(emphasizedSpan);
    }
    headlineSpan.textContent = phrase.text;
    picSrc.srcset = phrase.webp;
    picImg.src = phrase.gif;
    picImg.alt = phrase.alt.emoji;
}

function setToggledOnHeadlineContent(
    phrase: ToggledOnPhrase,
    headlineSpan: Element,
    picImg: HTMLImageElement,
    picSrc: HTMLSourceElement
) {
    headlineSpan.classList.remove("deemphasized-text");
    const emphasizedSpan = document.createElement("span");
    emphasizedSpan.classList.add("emphasized-text");
    emphasizedSpan.textContent = phrase.highlighted;
    headlineSpan.textContent = "";
    headlineSpan.appendChild(emphasizedSpan);
    headlineSpan.append(phrase.text ?? "");
    picSrc.srcset = phrase.webp;
    picImg.src = phrase.gif;
    picImg.alt = phrase.alt.emoji;
}

export { setHeadline };
