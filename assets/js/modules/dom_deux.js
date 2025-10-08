export function runDomDuex(){
//Events
const eventBtn = document.querySelector('.eventDemo');
eventBtn.onclick = function(){
    console.log('You clicked me!')
}

function scream() {
    //alert('Get off me!')
}

eventBtn.onmouseenter = scream;

//EventLISTENER
const hello = document.querySelector('.hello');
const goodbye = document.querySelector('.goodbye');

hello.addEventListener('click', function(){
    if(hello.innerText === "Hello"){
        hello.innerText = "Goodbye"
    } else {
        hello.innerText = "Hello" 
    }
});

goodbye.addEventListener('click', function(){
    if(goodbye.innerText === "Goodbye"){
        goodbye.innerText = "Hello"
    } else {
        goodbye.innerText = "Goodbye" 
    }
});

//Random Color Changer
//Select the beackground div
const backGround = document.querySelector('.randomColor');
//Select the h3 color info
const colorInfo = document.querySelector('.color-info');
//Select the button
const changeBgBtn = document.querySelector('.getRandomBg');

function getRandomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

changeBgBtn.addEventListener('click', function() {
    const newColor = getRandomColor();
    backGround.style.backgroundColor = newColor;
    colorInfo.innerText = newColor;
});

//Select buttons
const colorBtns = document.querySelectorAll('.eventBtn');

//Add event listener to all buttons
for(let button of colorBtns) {
    button.addEventListener("click", colorize);
}

function colorize (){
    this.style.backgroundColor = getRandomColor();
    this.style.color = getRandomColor();
}

//The Event Button
document.querySelector('.eventObjDemo').addEventListener('click', (e) => {
    console.log(e)
})
}

document.querySelector('.evtInput').addEventListener('keydown', (e) => {
    console.log(e.key)
    console.log(e.code)
})

// window.addEventListener('keydown', function(e) {
// switch(e.code){
//     case 'ArrowUp':
//     console.log("up");
//     break;
//     case 'ArrowDown':
//     console.log("down");
//     break;
//     case 'ArrowLeft':
//     console.log("left");
//     break;
//     case 'ArrowRight':
//     console.log("right");
//     break;
//     default:
//         console.log('Ignored');
// }
// });

//Form Demo
const formDemo = document.querySelector('#shelterform');
const list2 = document.querySelector('#list');
const input = document.querySelector('#catName');

formDemo.addEventListener('submit', function(e){
    //console.log('Submitted');
    e.preventDefault();
    const catName = (input.value);
    const newLi = document.createElement('li');

    newLi.innerText = catName + "🐈";
    list2.append(newLi);
    input.value = "";
});

//Change events
const changeInput = document.querySelector('#change');
const displayInput = document.querySelector(".displayInputText")

changeInput.addEventListener('input', function () {
    displayInput.innerText = changeInput.value 
});

//Event bubbling
const bubbleBtn = document.querySelector(".bubble");

bubbleBtn.addEventListener('click', function() {
    console.log("button clicked")
});

//Event Delegation
const shoppingForm = document.querySelector('.shoppingForm');
const item = document.querySelector('.item');
const shoppingList = document.querySelector('.shoppingList')

shoppingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newItem = item.value;
    const newLi = document.createElement('li');
    newLi.classList.add('listItem')
    newLi.innerText = newItem
    shoppingList.append(newLi);

    //clear the inputs
    item.value = '';
});

const allLis = document.querySelectorAll('.listItem');
for(let li of allLis){
    console.log(li);
}

//Remove items from list
shoppingList.addEventListener('click', function(e){
    if(e.target.classList.contains('listItem')) {
        remove()};
})







