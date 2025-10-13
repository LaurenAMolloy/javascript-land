export function runOop () {
    //Creating a Method on the prototype!
    String.prototype.yell = function(){
        return `${this.toUpperCase()}!!!!!`
    }

    console.log("I love you".yell())

    //Overriding a method on the prototype!
    Array.prototype.pop = function() {
        return "Sorry I wanted that element!"
    }

    const arr = [3, 4, 5];
    console.log(arr.pop())

//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const demoColor = makeColor(35, 255, 255);
console.log(demoColor)
console.log(demoColor.hex())

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

console.log(black.hex === firstColor.hex)

//Lets make a constructor function!
//When we call it we get a color object!
// function Color (r, g, b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

//We can create methods for color constructor
//The method will only live on the prototype!
// Color.prototype.rgb = function (){
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b}`
// }

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return (
//         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     );
// }

// Color.prototype.rgba = function(a= 1.0) {
//     const { r, g, b, a} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(40, 50, 60);
// console.log(color1.hex === color2.hex);

//Class
class Color {
    constructor( r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
        this.calcHSL();
    }

    greet(){
        return `Hello from ${this.name}`
    }
    rgb(){
        const { r, g, b} = this
        return `rgb(${r}, ${g}, ${b})`
    }
    hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
	}
	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}
const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
const orange = new Color(230, 126, 34, "carrot")
console.log(orange)
console.log(red);
console.log(red.greet()); //Hello from tomato
console.log(white.rgb()); //rgb(255, 67, 89)
console.log(white.rgb === red.rgb) //true
//document.body.style.backgroundColor = red.opposite();

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }   
}

class Cat extends Pet {
    //Additional information for cat can be added using super!
    //Super references th class we are extending from!
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEEOW'
    }
}

class Dog extends Pet {  
    woof(){
        return 'Woof!'
    }
    //if no method is found js will look up the prototype chain
}

const cat = new Cat("mickey", 8);
const dog = new Dog("ben", 17);
console.log(cat)
console.log(dog)
}


