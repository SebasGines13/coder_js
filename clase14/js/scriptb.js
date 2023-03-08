// setTimeout( fin, time )
/*
function say_hi(){
    console.log("Hi");
}

setTimeout( say_hi, 3000);



console.log("Begin process");

setTimeout( ()=>{
    console.log("Half");
}, 0 )

console.log("End process");

// CallStack

function first_call(){
    second_call();
}

function second_call(){
    console.log("Hi 2");
}

first_call()
*/

// setInterval

function water(){
    let background = document.body;

    if( background.style.backgroundColor == "red" ) {
        background.style.backgroundColor = "green"
    } else {
        background.style.backgroundColor = "red"
    }
}


let btn = document.getElementById("btn");

let interval = setInterval( water, 500 );

btn.addEventListener("click", ()=>{
    clearInterval(interval);
})



