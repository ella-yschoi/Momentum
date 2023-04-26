const title = document.querySelector("div.hello:first-child h1")
// selector와 일치하는 문서 내 첫번째 Element를 반환, 없으면 null 반환
// 매개변수는 유효한 CSS selector여야만 함

function handleTitleClick() { // title click시
    title.style.color = "blue"; // title color가 blue로 바뀜
}

function handleMouseEnter() { // mouse를 갖다대면
    title.innerText = "Mouse is here"; // 해당 text로 바뀜
}

function handleMouseLeave() { // mouse를 갖다대지 않으면
    title.innerText = "Mouse is not here"; // 해당 text로 바뀜
}

// title이, 특정 event(클릭, 호버 등)를, listen 할 때마다, 호출할 함수
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);