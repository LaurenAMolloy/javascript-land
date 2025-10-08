const h1 = document.querySelector('h1');
h1.style.color = 'rgb(255, 255, 255)';

//Styles Task 
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//Grab elements
const rainbow = document.querySelectorAll('span');

rainbow.forEach((el, index) => {
    el.style.color = colors[index]
})

//Toggle
const list = document.querySelectorAll('.toggleDemo li');
console.log(list)

list.forEach((el) => {
     el.classList.toggle('highlight');
})

//prepend
//document.querySelector('.createElements h3').prepend("❤️");

//Create element
const h4 = document.createElement('h4');
//Add text
h4.innerText = "JavaScript is awesome";

const h3 = document.querySelector('.createElements h3');

//insert to DOM
h3.insertAdjacentElement('afterend', h4);

//Task Create 100 Buttons!
const btnContainer = document.querySelector(".btnContainer")
for(let i = 0; i < 100; i++){
    const btn = document.createElement('button');
    const number = parseInt([i])
    btn.innerText = `BUTTON #${number + 1}`;
    btnContainer.append(btn);   
}
