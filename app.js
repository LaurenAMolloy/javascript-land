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

// const students = [
//     ["Alice", "Bob", "Charlie"],
//     ["David", "Eva", "Frank"],
//     ["Grace", "Henry", "Isabella"],
//     ["Jack", "Kara", "Leo"]
//   ];

// for(let i = 0; i < students.length; i++){
//     //console.log(students[i])
//     const row = students[i];
//     console.log(`ROW #${i + 1}`)
//     //iterate over row
//     for(let j = 0; j < row.length; j++){
//         console.log(row[j]);
//     }
// }


// const SECRET = ("BabyHippo");
// let guess = prompt("Guess the secret code");

// while(guess !== SECRET){
//     guess = prompt("Guess the secret code");
// }
// console.log("Correct!");


// let input = prompt("Hey, say something!")

// while(true){
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("You win");

//Guessing Game 

//Displays a user prompt
// let maxNum = parseInt(prompt("Enter the maximum number"));

// //While maxnum is falsey keeps asking the user!
// while(!maxNum){
//     maxNum = parseInt(prompt("Enter a valid number"));
// }

// //Create a random num using Math
// //0-1 not 1 inclusive!
// const targetNum = Math.floor(Math.random() * maxNum) + 1;
// console.log(targetNum);

// //Prompt a user to ask for the first guess
// let guess = prompt("Enter your first guess! (Type 'q' to quit the game)");
// //Track number of attempts
// let attempts = 1;

// //While guess is not equal to target
// while (parseInt(guess) !== targetNum) {
//     //option to break the game
//     if(guess === 'q') break;
//     guess = parseInt(guess);
//     //Compare guess to targetnum to check if guess is higher 
//     if(guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess!");
//         //Add one to attempts
//         attempts ++
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess!");
//         //Add one to attempts
//         attempts ++
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit")
//     }
// }

// if(guess === "q") {
//     console.log("ok, you quit!");
// } else {
//     console.log(`You got it! It took you ${attempts}`);
// }

//The for of loop!

const disneyCharacters = [
    "Mickey Mouse",
    "Minnie Mouse",
    "Donald Duck",
    "Goofy",
    "Pluto",
    "Daisy Duck",
    "Cinderella",
    "Snow White",
];

//This is not as clean as the for of
for(let i = 0; i < disneyCharacters.length; i++){
    //console.log(disneyCharacters[i])
}

//Look how lovely this is!
for(let character of disneyCharacters){
    //console.log(character);
}

const myName = "lauren";

for(char of myName){
    //console.log(char)
}

const footballScores = {
    "Barcelona": 2,
    "Manchester United": 3,
    "Bayern Munich": 4,
    "Juventus": 5,
}

for(let team in footballScores) {
    //console.log(`${team} scored ${footballScores[team]}`)
}

Object.keys(footballScores);
Object.values(footballScores);
Object.entries(footballScores);

let total = 0;

//this gives us an array of the values
let scores = Object.values(footballScores)

for(let score of Object.values(footballScores)) {
    total += score;
}

//Get average
const avg = total/scores.length;
//console.log(avg);

//todo
// store item in array
// display list
// delete item


//prompt user for list item
//let task = prompt("What do you want to do?");

// //Declare the user for an empty array
// const list = [];

// while(task !== "quit" && task !== "q") {

//     if(task === "list") {
//         console.log("**********");
//         for(let i = 0; i < list.length; i++){
//             console.log(`${i}: ${list[i]}`)
//         }
//         console.log("**********");
//     } else if (task === "new") {
//         const newListItem = prompt("What is the new todo?");
//         list.push(newListItem);
//         console.log(`${newListItem} added to the list`)
//     } else if (task === "delete") {
//         const index = parseInt(prompt("Which index would you like to delete?"));

//         if(!Number.isNaN(index)) {
//            const deleted = list.splice(index, 1);
//         console.log(`ok, deleted ${deleted[0]}`) 
//         } else {
//             console.log("Unknown index")
//         }   
//     }
//     task = prompt("What do you want to do?");
// }

// console.log("No more todo's for you")


// function pink () {
//     console.log("cover");
//     console.log("me");
//     console.log("in");
//     console.log("sunshine!");
// }

// pink();

// function heart() {
//     console.log("<3")
// }

//heart();

//parameter a is variable to represent the argument
// function goodMorning (name) {
//     console.log(`Kalimera ${name}`)
// }

// goodMorning("florence!");

//function will multiple arguments
// function greet (first, last) {
//     console.log(`Hey there ${first} ${last}`);
// }

// greet("Teddy", "Swims");

//function to repeat hix
// function repeatString(str, repetition) {
//     for(let i = 0; i < repetition; i++){
//         console.log(`${str}`);
//     }
// }
// repeatString("hola", 5);

//snake eyes
// randomNum1 = Math.floor(Math.random() * 6) + 1
// randomNum2 = Math.floor(Math.random() * 6) + 1
// function snakeEyes(num1, num2) {
//     console.log(num1, num2)
//     if(num1 === num2) {
//         console.log("Snake Eyes")
//     } else {
//         console.log("Not Snake Eyes!")
//     }
// }

// snakeEyes(randomNum1, randomNum2);

function add(x, y) {
    if(typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y
}

//multiply
function multiply(x, y) {
    return x * y
}

//isShortsWeather 
function isShorts(temp){
    if(temp >= 75) {
        return true;
    } return false;
}

//last element
// function lastElem(arr) {
//     const lastIndex = arr.length -1;
//     if(arr.length === 0){
//         return null
//     } return arr[lastIndex]
// }

// lastElem(["red", "blue", "green"]);

//caps function
// function caps(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// caps("elephant");

//sum array
// function sumArray(arr) {
// let total = 0;
//     for(el of arr){
//         console.log(el)
//         total += el
//     }
//     return total;
// }

//returnDay
// const week = [
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//     "sunday"
// ]

//function return day
// function returnDay(num) {
//     if(num < 1 || num > 7){
//         return null;
//     } 
//     for(let i = 0; i < week.length; i++){
//         if(num -1 === i){
//             console.log(week[i]);
//     }
// }
// }

// returnDay(3);

//function scope
// function collectEggs(){
//     //total eggs is now scoped to this function
//     let totalEggs = 6
// }

// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet macaw";

// function birdWatch() {
//     let bird = "Great Blue Heron";
//     console.log(bird)
// }

// birdWatch();

// //block scoped
// let radius = 8;

// if(radius > 0) {
//     const PI = 3.14;

//     let circ = 2 * PI * radius;
// }

// console.log(radius); //8
// console.log(PI);//NOT DEFINED
// console.log(circ);//NOT DEFINED


//Lexical Scope
//The question is does cry for help have access to heroes?
function bankRobbery(){

    const heroes = ['Spiderman', 'Wolverine', 'Black Panther' ]
    function cryForHelp(){
        for(let hero of heroes) {
            console.log(`HELP US, ${heroes}.toUpperCase`);
        }
    }
    cryForHelp();
}



function isEven(num) {
	if(num % 2 === 0) {
        console.log("even")
    } else {
    console.log("odd")
    }  
}

isEven(8);

//function expressions
const square = function(num) {
    return num * num;
}

console.log(square(4))
//16

//High Order Functions
function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

//Do not invoke roll die here!
callTwice(rollDie);

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5){
        return function() {
            alert("I am a good function!")
        }
    } else {
        return function() {
            alert("I am a bad function!")
        }
    }
}

const myMystery = makeMysteryFunc();

//make between
//factory function
//This function will accept an argument
function makeBewteenFunc(min, max) {
    return function(num){
        return num >=min && num <=max
    }
}

const isChild = makeBewteenFunc(0, 18);
const isAdult = makeBewteenFunc(19, 64);
const isOap = makeBewteenFunc(65, 120);

// function isBetween(num){
//     return num >=50 && num <=100
// }
// function isBetween2(num){
//     return num >=1 && num <=10
// }

const myMath = {
    square: function(num) {
        return num * num
    },
    cube: function(num) {
        return num * num * num
    }
}