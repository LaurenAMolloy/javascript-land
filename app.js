console.log("it works");

//Conditionals

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

//const form = document.querySelector("form");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const password = (e.target[0].value);
//     console.log(e);
//     console.log(password);
//     const passwordInput = document.getElementById("password").value;
//     console.log(passwordInput);
//     console.log(this);

//     if(password.length >= 6){
//         //Password cannot include spaces!
//         if(password.indexOf(" ") === -1){
//             console.log("Good job!")
//         } else {
//             console.log("password cannot contain spaces")
//         }
//         console.log("password is long enough")
//     } else {
//         console.log("password too short")
//     }
// });

//Truthy and Falsey
//const userInput = prompt("Enter something");
// if(userInput){
//     console.log("Truthy")
// } else {
//     console.log("Falsey!")
// }

//AND OR
//Theme Park Examples
//If you are below 5 or over 65...
// const age = 50;
// if(age < 5 || age >= 65) {
//     console.log("FREE");
// } else if (age >= 10 && age <= 64) {
//     console.log("$10");
// }

//SWITCH
// const color = "purple"
// switch(color) {
//     case "red":
//         console.log("and yellow");
//         break
//     default:
//         console.log("I can sing a rainbow");
//         break
// }

// let firstName = prompt("enter your name");
// if(!firstName){
//      firstName = prompt("try again");
// }

//Loops
//Add 2 each time

//Couting even number
// for(let i = 0; i <= 20; i += 2){
//     console.log(i)
// }

//Couting odd number
// for(let i = 1; i <= 20; i += 2){
//     console.log(i)
// }

//counting down in tens
// for(let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// let animals = ["Dog", "Cat", "Elephant", "Lion", "Zebra"];

// for(let i = 0; i < animals.length; i ++) {
//     console.log(i, animals[i]);
// }
// for(let i = animals.length -1; i >= 0; i --) {
//     console.log(i, animals[i].toUpperCase());
// }

//nested arrays

// for(let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j <= 4; j++ ){
//         console.log(`        j is ${j}`)
//     }
// }

const students = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Eva", "Frank"],
    ["Grace", "Henry", "Isabella"],
    ["Jack", "Kara", "Leo"]
  ];

for(let i = 0; i < students.length; i++){
    //console.log(students[i])
    const row = students[i];
    console.log(`ROW #${i + 1}`)
    //iterate over row
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}

