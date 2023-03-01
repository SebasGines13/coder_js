class Game{
    // Constructor
    constructor(){
        this.numbers = [];
    }

    // Setters and Getters
    add_number( number ){
        this.numbers.push(number);
    }

    get_numbers(){
        return this.numbers;
    }

}

class Number{
    // Constructor
    constructor(){        
        this.number_to_guess = Math.floor(Math.random()*9);
        this.attempts = 0;
        this.guessed = false;
    }

    // Setters and Getters
    add_attempt(){
        this.attempts ++;
    }

    get_attempt(){
        return this.attempts;
    }

    get_number_to_guess(){
        return this.number_to_guess;
    }

    set_number_to_guess( number ){
        this.number_to_guess = number;
    }

    set_guessed( guessed ){
        this.guessed = guessed;
    }

    get_guessed(){
        return this.guessed;
    }

    // Methods
    is_lower( number ){
        return this.number_to_guess < number;
    }

    is_greater( number ){
        return this.number_to_guess > number;
    }

    is_guessed( number ) {
        return this.number_to_guess == number;
    }

}

class Score{
    constructor( numbers, points){
        this.numbers = numbers;
        this.points = points;
    }

    get_summary(){
        return "\n\nYour Stats in this game :)\nNumbers Guessed: " + this.numbers + "\nPoints: " + this.points;
    }
}

// Helper function to validate a request number
function requestNumber( msj ){
    let number = parseInt(prompt( msj ));
    if ( typeof(number) != "number" ||  number < 0 || number > 9 ) {
        number = requestNumber( "❌ Please enter a valid integer number (0 to 9)" );
        return number;
    } else {
        return number;
    }
}

// Helper function to validate a request value to continue or not the game
function requestContinue( msj ){
    let keepPlaying = prompt( msj );
    if ( keepPlaying.toUpperCase() != "S" && keepPlaying.toUpperCase() != "N") {
        keepPlaying = requestContinue( "❌ Please enter a valid value to keep playing (S / N)" );
        return keepPlaying;
    } else {
        return keepPlaying;
    }
}

function sum_points( accumulated, number ){
    let attempts = number.get_attempt();
    if ( attempts <= 3 ){
        return accumulated += 3;
    } else if ( attempts <= 4){
        return accumulated += 2;
    } 
    return accumulated -= 1;
}


// Helper function to calculate the score
function calculate_score( game ){
    let numbers = game.get_numbers();
    let points = numbers.reduce( sum_points, 0 );
    let score = new Score(numbers.length, points)
    return score.get_summary();
}

// Main function of the game
function newGame(){
    let game = new Game();
    do {
        let guess_number = new Number();
        do {
            number = requestNumber("Enter a integer number (0 to 9)");
            guess_number.add_attempt();
            if ( !guess_number.is_guessed(number)) {
                if ( guess_number.is_lower(number) ) {
                    alert("The lucky number is less than the one entered 🔽🔽🔽")
                } else {
                    alert("The lucky number is greater than the entered one 🔼🔼🔼")
                }
            } else {
                alert("🏆🎉 Well done, you guessed the number "+ guess_number.get_number_to_guess() + " in " + guess_number.get_attempt() + " attempts " + "😁")
                guess_number.set_guessed(true);
            }        
        } while (!guess_number.get_guessed()) 
        game.add_number(guess_number); 
    } while ( requestContinue("🎲 Do you want to keep playing? (S/N)").toUpperCase() == "S" )
    alert("Thanks for playing 🎲 \n" + calculate_score(game))
}


document.getElementById("start_game").addEventListener("click", ()=>{
    let numbers = document.getElementById("enter_number");
    if( numbers.style.display != "none" ){
        numbers.style.display = "none";
    } else {
        numbers.style.display = "block";
    }
})

