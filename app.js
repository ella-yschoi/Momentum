const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
// 1. addEventListener 호출
// 2. listen 하고 싶은 event 이름 알려주기
// 3. event가 발생하면 호출할 function을 전달해 주기