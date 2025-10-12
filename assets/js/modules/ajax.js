export function runAjax (){
console.log("it works");

//making a new request
const req = new XMLHttpRequest();

//event callbacks
//Run when no errors!
req.onload = function(){
    console.log("IT LOADED");
    console.log(this)
    //convert to JSON
    const data = JSON.parse(this.responseText);
    console.log(data.result.properties.name, data.result.properties.height)

}
//Run when errors!
req.onerrors = function(){
    console.log("ERROR!!!");
}

//Open the request and provide the method and the URL
req.open("GET", "https://swapi.tech/api/people/1/" );
//send the request
//req.send();


//Fetch Example
//fetch('https://swapi.tech/api/people/1/')
//if resolved log results
//the promise is resolved as soon as fetch recieves the headers
//Use .JSON() not the same as JSON.PARSE
// .then((res) => {
//     console.log(res)
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch(err)

const starWarsPeeps = async() => {
    try {
        const res = await fetch('https://swapi.dev/api/people/2')
        const data = await res.json()
        console.log(data)
    } catch(e) {
        console.log("Error", e)
    }
}

//starWarsPeeps()

//Intro to Axios
// axios.get('https://swapi.dev/api/people/2')
// .then((res) => {
//     console.log(res);
// })
// .catch((e) => {
//     console.log(e);
// });

const getPerson = async (id) => {
    try {
       const res = await axios.get(`https://swapi.dev/api/people/${id}`);
       console.log(res.data.name)
    } catch (e) {
        console.log('Error', e)
    }  
}
getPerson(5)

const jokesP = document.querySelector('.dad-joke');
const jokesBtn = document.querySelector('.dadJoke-btn')

const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'}}
        const res = await axios.get(`https://icanhazdadjoke.com/`, config);
        return (res.data.joke)
    } catch (e) {
        return `No jokes available today!`
    }
}

const displayJoke = async () => {
    const jokeText = await getDadJoke();
    jokesP.innerText = jokeText
} 

jokesBtn.addEventListener('click', displayJoke);

const form = document.querySelector('.tvForm');
const tvImg = document.querySelector('.tvImgContainer');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params : { q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImg(res.data);
    form.elements.query.value = " ";
});

const makeImg = (shows) => {
    shows.forEach((result) => {
        //console.log(show)
        if(result.show.image) {
           const img = document.createElement('img');
            img.src = result.show.image.medium;
            tvImg.append(img) 
        }
        
    });
}


}