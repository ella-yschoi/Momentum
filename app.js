const h1 = document.querySelector("div.hello:first-child h1")
// selector와 일치하는 문서 내 첫번째 Element를 반환, 없으면 null 반환
// 매개변수는 유효한 CSS selector여야만 함

function handleTitleClick() { 
    h1.style.color = "blue"; 
}

function handleMouseEnter() { 
    h1.innerText = "Mouse is here"; 
}

function handleMouseLeave() { 
    h1.innerText = "Mouse is not here"; 
}

function handleWindowResize() {
    document.body.style.backgroundColor = "skyblue";
}

function handleWindowCopy() {
    alert("Hey, Don't copy that");
}

function handleWindoOffline() {
    alert("Where is Wifi?");
}

function handleWindoOnline() {
    alert("Here is Wifi");
}

h1.addEventListener ("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindoOffline);
window.addEventListener("online", handleWindoOnline);