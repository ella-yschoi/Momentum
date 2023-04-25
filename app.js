const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    console.log("Title was clicked");
}

title.addEventListener("click", handleTitleClick);