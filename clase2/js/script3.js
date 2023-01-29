let user_age = parseInt(prompt("Enter your age: "));
let user_name = prompt("Enter your name: ");

if( user_age >= 18 ){
    console.log("Welcome to the system: ", user_name);
} else {
    console.log("You cannot log in to the system");
}