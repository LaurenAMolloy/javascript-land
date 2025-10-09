export function runAsyncJs() {
    console.log('it works');
    const multiply = (x, y) => x * y;

    const square = (x) => multiply(x, x);

    const isRightTriangle = (a, b, c ) => {
        return square(a) + square(b) === square(c);
    }

    isRightTriangle(3, 4, 4)

    //settimeout example
    console.log('print first')
    setTimeout(() => {
        console.log('print after 3 seconds')
    }, 3000);
    console.log('print second')

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
    const delayColorChange = (newColor, delay, doNext) => {
        setTimeout(() => {
            backGround.style.backgroundColor = newColor;
            doNext() && doNext();
        }, delay)
    }

    //function call
    delayColorChange('red', 1000, () => {
        delayColorChange('orange', 1000, () => {
            delayColorChange('pink', 1000, () => {
                delayColorChange('green', 1000, () => {

                });
            });
        });
    });

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
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
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


const request = fakeRequestPromise('yelp.com/api/coffee');
request
.then(() => {
    console.log("It worked")
    console.log("Promise Resolved")
})
.catch(() => {
    console.log("OH NO, ERROR")
    console.log("Promise Rejected")
})
}