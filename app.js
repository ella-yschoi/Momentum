const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() { 
    const currentColor = h1.style.color
    let newColor; // 비어있는 변수
    if(currentColor === "skyblue") { // 일치하는지 확인해 true or false 반환
        newColor = "pink"; // color가 skyblue라면 Pink로 변경하라
    } else {
        newColor = "skyblue"; // 아니라면 skyblue로 두어라
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);