export function asyncjs () {
    //console.log('it works');
    const multiply = (x, y) => x * y;

    const square = (x) => multiply(x, x);

    const isRightTriangle = (a, b, c ) => {
        return square(a) + square(b) === square(c);
    }

    isRightTriangle(3, 4, 4)

    //settimeout example
    // console.log('print first')
    // setTimeout(() => {
    //     console.log('print after 3 seconds')
    // }, 3000);
    // console.log('print second')

    //callBack Hell Example!
    const backGround = document.querySelector('.callBackHell');
    
    // setTimeout(() => {
    //     backGround.style.backgroundColor = 'red'
    //     setTimeout(() => {
    //         backGround.style.backgroundColor = 'orange'
    //         setTimeout(() => {
    //             backGround.style.backgroundColor = 'pink'
    //             setTimeout(() => {
    //                 backGround.style.backgroundColor = 'green'
    //             }, 1000)
    //         }, 1000)
    //     }, 1000);
    // }, 1000);
    //}   

    //function to change color
    // const delayColorChange = (newColor, delay, doNext) => {
    //     setTimeout(() => {
    //         backGround.style.backgroundColor = newColor;
    //         doNext() && doNext();
    //     }, delay)
    // }

    //function call
    // delayColorChange('red', 1000, () => {
    //     delayColorChange('orange', 1000, () => {
    //         delayColorChange('pink', 1000, () => {
    //             delayColorChange('green', 1000, () => {

    //             });
    //         });
    //     });
    // });

    //Example 
    // searchMoviesApi('amadeus', () => {
    //     saveToMyDb(movies, () => {
    //         //if it works run this..
    //     }), () => {
    //         //if it does not work run this..
    //     }, () => {
    //         //if the API is down run this..
    //     }
    // })

    //FakeCallBack Demo
    // THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }
//THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com/page1', 
// function(response){
//     console.log("It worked!")
//     console.log(response);
//     fakeRequestCallback('books.com/page2', 
//         function(response){
//             console.log("It worked!")
//             console.log(response);
//     }, function(err) {
//     console.log("Error", err)
//     });
// }, function(err) {
//     console.log("Error", err)
// })


// const request = fakeRequestPromise('yelp.com/api/coffee');
// request
// .then(() => {
//     console.log("It worked")
//     console.log("Promise Resolved")
// })
// .catch(() => {
//     console.log("OH NO, ERROR")
//     console.log("Promise Rejected")
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then(() => {
//     console.log('IT WORKED')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page2')
// })
// .then(() => {
//     console.log('IT WORKED')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page3')

// })
// .then(() => {
//     console.log("It worked(page-3)")
//     console.log(data)
// })
// .catch(() => {
//     console.log('OH NO, A REQUEST FAILED')
// })

//Promise Demo
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7) {
//                 resolve('YOUR FAKE DATA HERE')
//             }
//             reject();
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then((data) => {
//     console.log("DONE WITH THE REQUEST!");
//     console.log('datais:', data)
// })
// .catch((err) => {
//     console.log('OH NO', err);
// })

const tryPorridge = (temp) => {
    return new Promise((resolve, reject) => {
        if(temp > 0 && temp < 40 ){
            reject("Too Cold");
        } else if (temp > 40 || temp < 60 ){
            resolve("Just Right")
        }
    });
}

tryPorridge(55)
.then((data) => {
    console.log(data)
})

// const colorChangerDiv = document.querySelector('.promiseDemo');

// const delayedColorChange = (color, delay) => {
//     //create a new promise
//     return new Promise((resolve, reject) => {
//         //use setTimeout
//         setTimeout(() => {
//             //change the color
//             colorChangerDiv.style.backgroundColor = color
//             //resolve the promise
//             resolve()
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
// //one line implicit return on a single line
// //Using .then success handlers
// .then(() => delayedColorChange('yellow', 1000))
// .then(() => delayedColorChange('pink', 1000))
// .then(() => delayedColorChange('green', 1000))
// .then(() => delayedColorChange('purple', 1000))
// .then(() => delayedColorChange('orange', 1000))
// .then(() => delayedColorChange('blue', 1000))

// const sing = async () => {
//     throw new Error("oh no")
//     return 'La La La La'
// }

// sing()
// .then((data) => {
//     console.log('Promise resolved with', data)
// })
// // .catch(err => {
//     console.log("OH NO, PROMISE REJECTED")
// })

//Login simulation using promises
const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}

login('abhdjcdbhj', 'corgifeetarecute')
.then(msg => {
    console.log("Logged In!")
    console.log(msg)
})
.catch(err => {
    console.log("Error")
    console.log(err)
})

const delayedColorChange = (color, delay) => {
    //create a new promise
    return new Promise((resolve, reject) => {
        //use setTimeout
        setTimeout(() => {
            //change the color
            asyncDemo.style.backgroundColor = color
            //resolve the promise
            resolve()
        }, delay)
    })
}

const asyncDemo = document.querySelector('.asyncColorChanger')

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('pink', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('purple', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('blue', 1000);
    return "ALL DONE"
}
rainbow().then(() => console.log("End of the rainbow"));
}
