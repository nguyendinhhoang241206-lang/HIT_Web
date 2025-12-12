let userName = prompt("Who are you ?");
let userAge = prompt("How old are you ?");
console.log(typeof userAge);
if(typeof userAge === "number") {
    console.log("Correct!");
} else {
    userAge = Number(userAge);
    console.log("Replaced!");
}
alert("Welcome " + userName.toUpperCase() + "! Your name is beatiful, it has " + userName.length + ` character. Next year, you is ${userAge + 1} years old.`);