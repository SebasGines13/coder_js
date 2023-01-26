// ========================================================
// =================   BUCLES   ===========================
// ========================================================
/*

    for ( from ; to ; actualization){
        sentences
    }



for ( let i = 0; i < 3; i = i + 1 ){
    console.log("Hi! we are on lap #: ", i + 1)
}
*/


// Show the number 1 - 10 by console
/*
for (let i = 0; i <= 10; i = i + 1){
    console.log(i)
}
*/

// Given a number, return the table of that number.
/*
let number = parseInt(prompt("Enter number: "))

for ( let i = 0 ; i <= 10 ; i = i + 1){
    console.log(number + " x " + i + " = " + number * i)
}


let user_registered = "Pep";
let try_logging = 1;

for (let i = 0 ; i < 3 ; i = i + 1 ){
    let user_name = prompt("Enter user name: ");

    if ( user_name != user_registered && i < 3) {
        console.log("Cannot log in to the system");
        try_logging = try_logging + 1;
        continue;
    }

    if ( try_logging >= 3 ) {
        console.log("User blocked!");
        break;
    }

    console.log( "Welcome to the system " + user_name );
}

let user_name = prompt("Entre your name or 'EXIT'");

while ( user_name != "EXIT" ){
    console.log("Welcome " + user_name);    
    user_name = prompt("Entre your name or 'EXIT'");
}



// Given a number, show by console the next one
// Is terminated by entering a negative number

let number = parseInt(prompt("Enter number: "));

while ( number > 0 ) {
    console.log( number + 1 )
    number = parseInt(prompt("Enter number: "));
}


// DO WHILE
let user_name;
do {  
    user_name = prompt("Entre your name or 'EXIT'");
    console.log("Welcome " + user_name);  
} while ( user_name != "EXIT" );
*/


// 1 ) Enter numbers while sum less than 500
let number, sum = 0;
do {  
    number = parseInt(prompt("Enter numbers while the sum less than 500: "));
    sum = number + sum;
    console.log("sum: ", sum)
} while ( sum < 500 );

// 2 ) Vote "Pep" van a votar x cantidad de socios

