import { loadNav } from "./modules/htmlLoader.js";
import { asyncjs } from "./modules/asyncjs.js";
import { runAjax } from "./modules/ajax.js";

document.addEventListener('DOMContentLoaded', () => {
    loadNav();
    //asyncjs();
    runAjax();
})


// for(let line = "#"; line.length < 8; line+= "#"){
//    console.log(line);
// }

// //FizzBuzz
// function fizzBuzz(){
//     for(let i = 1; i < 100; i++){
//         if([i] % 3 === 0){
//             console.log([i],"fizz")
//         }
//         if([i] % 5 === 0){
//             console.log([i], "buzz")
//         }
//         if([i] % 5 === 0 && [i] % 3 === 0){
//             console.log([i], "fizzbuzz")
//         }
//     }
// }

// //function min
// function min(num1, num2) {
//     return num1 < num2 ? num1 : num2
// }

// //Bean Counting
// function countB(str, B) {
// let b = 0;
// for(let char of str) {
//     char === B ? b++ : b 
// }
// return b
// };

// function countChar(str, char) {
//     let chartoCount = 0;
//     for(let letter of str) {
//         letter === char ? chartoCount++ : char 
//     }
//     return chartoCount
// }


