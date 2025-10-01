// console.log("it works");
// console.log("Before");
// let random = Math.random();
// if(random > 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random)
// }
// console.log("After");

// const dayOfWeek = prompt("Enter a day!").toLowerCase() ;

// if(dayOfWeek === "monday") {
//     console.log("I hate Mondays!");
// } else if (dayOfWeek === "saturday") {
//     console.log("Yey, it's weekend!");
// } else if (dayOfWeek === "=friday") {
//     console.log("I got the friday feeling!");
// } else {
//     console.log("MEH!")
// }

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = (e.target[0].value);

    if(password.length >= 6){
        //Password cannot include spaces!
        if(password.indexOf(" ") === -1){
            console.log("Good job!")
        } else {
            console.log("password cannot contain spaces")
        }
        console.log("password is long enough")
    } else {
        console.log("password too short")
    }
});

const userInput = prompt("Enter something");

if(userInput){
    console.log("Truthy")
} else {
    console.log("Falsey!")
}