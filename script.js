const yearSection = document.getElementById("year-section");
const year2023UnitElement = document.createElement("h2");

year2023UnitElement.className = "color-blue-light font-xl center-child animation-up-to-center";
year2023UnitElement.textContent = "3";

const year2022UnitAnimation = document.querySelector(".animation-center-to-down");
const year2023UnitAnimation = document.querySelector(".animation-up-to-center");
const yearProgressBar = document.getElementById("year-progress-bar");
const progressColorBar = document.querySelector(".progress-color");
const yearContainer = document.getElementById("year");

year2022UnitAnimation.addEventListener("animationend", () => {
    year2022UnitAnimation.classList.remove("animation-center-to-down");
    year2022UnitAnimation.remove();
    yearContainer.appendChild(year2023UnitElement);

    setTimeout(() => {
        progressColorBar.classList.add("progress-color-zero-width");
    }, 1000);
});

const yourHopeContainerElement = document.createElement("div");
yourHopeContainerElement.className = "container-center animation-fadein";

const yourHopeButtonElement = document.createElement("button");
yourHopeContainerElement.id = "year-btn"
yourHopeButtonElement.className = "btn below-center";
yourHopeButtonElement.textContent = "Your Hope";

yourHopeContainerElement.appendChild(yourHopeButtonElement);

year2023UnitElement.addEventListener("animationend", () => {
    yearSection.appendChild(yourHopeContainerElement);
});

const quoteContainerElement = document.createElement("div");
quoteContainerElement.id = "quote";
quoteContainerElement.className = "container-center width-full flex flex-col flex-center";

const firstQuoteHeadingElement = document.createElement("h2");
firstQuoteHeadingElement.className = "center color-blue-light font-l center-child-up animation-up-to-center-first";
firstQuoteHeadingElement.textContent = "Please Be Nice";

quoteContainerElement.appendChild(firstQuoteHeadingElement);

const conjuntionQuoteHeadingElement = document.createElement("h2");
conjuntionQuoteHeadingElement.className = "center color-blue-light font-l center-child-center animation-up-to-center-middle hide";
conjuntionQuoteHeadingElement.textContent = "&";

quoteContainerElement.appendChild(conjuntionQuoteHeadingElement);

const lastQuoteHeadingElement = document.createElement("h2");
lastQuoteHeadingElement.className = "center color-blue-light font-l center-child-down animation-up-to-center-last hide";
lastQuoteHeadingElement.textContent = "Please Be Mine";

const loveIconElement = document.createElement("span");
loveIconElement.className = "heart center-child animation-up-to-center";

lastQuoteHeadingElement.appendChild(loveIconElement);

quoteContainerElement.appendChild(lastQuoteHeadingElement);

yourHopeContainerElement.addEventListener("click", () => {
    yearContainer.classList.add("animation-fadeout");
    yearProgressBar.classList.add("animation-fadeout");
    yourHopeContainerElement.classList.add("animation-fadeout");
    setTimeout(() => {
        yearContainer.remove();
        yearProgressBar.remove();
        yourHopeContainerElement.remove();
        yearSection.appendChild(quoteContainerElement);
    }, 1000);
});

firstQuoteHeadingElement.addEventListener("animationend", () => {
    conjuntionQuoteHeadingElement.classList.remove("hide"); 
});

conjuntionQuoteHeadingElement.addEventListener("animationend", () => {
    lastQuoteHeadingElement.classList.remove("hide"); 
 });
