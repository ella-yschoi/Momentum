// conditional practice

const age = parseInt(prompt("How old are you?"));

if(isNaN(age || age < 0)) { // 1. true고
    console.log("Please write a real positive number");
} else if (age < 18) { // 2. true여야
    console.log("You are too young")
} else if (age >= 18 && age <= 50) { // 3. 이 조건들 만족 여부 판단 가능
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else {
    console.log("You can do whatever you want!");
}