function greeting(){
    console.log("Hi!");
}

let btn_greeting = document.getElementById("btn_greeting");
btn_greeting.addEventListener("click", greeting );
btn_greeting.addEventListener("click",()=> console.log("Bye :)"))

let btn_mouse = document.getElementById("btn_mouse");

btn_mouse.addEventListener("mousedown", function( e ){
    console.log("Listen mouse down!");
    console.log(e);
    console.log(e.button)

    if (e.button == 0){
        console.log("Btn left");
    } else if (e.button == 1) {
        console.log("Wheel");
    } else if (e.button == 2) {
        console.log("Bnt right");
    } else {
        console.log("Another button")
    }
})


btn_mouse.addEventListener("mouseup", function( e ){
    console.log( "Release the mouse button", e.button);
})

let img = document.getElementById("img_emoji");

img.addEventListener("mouseover", function(){
    img.src = "./img/arg1.png";
})

img.addEventListener("mouseout", function(){
    img.src = "./img/cha1.png";
})

/*
window.addEventListener("keydown", function(e){
    console.log(e.key);
})

let user = document.getElementById("user_name");

user.addEventListener("input",function( e ){
    console.log("Event input: ", e.target.value);
});
*/

let user = document.getElementById("user_name");

user.addEventListener("change",function( e ){
    if ( e.target.value == "Pep"){
        console.log( "Welcome", e.target.value )
    } else {
        console.log( "Welcome other user..." )
    }
});

let form = document.getElementById("form");

form.addEventListener("submit", function( e ){
    e.preventDefault();
    let name_form = document.getElementById("name_form");
    console.log("Welcome", name_form.value)
});