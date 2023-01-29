function newGame(){
    let number_to_guess = Math.floor(Math.random()*9);
    let gameOver = false;
    let number, attempts = 0;
    do {
        number = requestNumber("Enter a integer number (0 to 9)");
        attempts ++;
        if ( number != number_to_guess ) {
            if ( number > number_to_guess ) {
                alert("The lucky number is less than the one entered 🔽🔽🔽")
            } else {
                alert("The lucky number is greater than the entered one 🔼🔼🔼")
            }
        } else {
            gameOver = true;
        }        
    } while (!gameOver && attempts < 3) 
    if ( gameOver ) {
        alert("🏆🎉 Congratulations! you win the game 😁")
    } else {
        alert("🙈 You lost, the lucky number was " + number_to_guess + " ... but you can try a new game 😉")
    }
}


function requestNumber( msj ){
    let number = parseInt(prompt( msj ));
    if ( typeof(number) != "number" ||  number < 0 || number > 9 ) {
        number = requestNumber( "❌ Please, enter a valid integer number (0 to 9)" );
        return number;
    } else {
        return number;
    }
}

