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
    let attempts = number.attempts;
    if ( attempts <= 3 ){
        return accumulated += 3;
    } else if ( attempts <= 4){
        return accumulated += 2;
    } 
    return accumulated -= 1;
}


// Helper function to calculate the score
function calculate_score( numbers ){
    let points = numbers.reduce( sum_points, 0 );
    let score = new Score(numbers.length, points)
    return score.get_summary();
}


function show_toast( msg ){
    Toastify({
        text: msg,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
}

// Main function of the game
document.getElementById("start_game").addEventListener("click", ()=>{
    localStorage.clear();
    let game = new Game();
    let number_to_guess = new Number();
    localStorage.setItem("game",JSON.stringify(game));
    localStorage.setItem("number_to_guess",JSON.stringify(number_to_guess));
    document.getElementById("start_game").style.display = "none";
    let numbers = document.getElementById("enter_number");
    numbers.style.display = "block";
});

document.getElementById("btn_number").addEventListener("click", ()=>{
    number_save = JSON.parse( localStorage.getItem("number_to_guess") );
    number_save.attempts ++;
    input_number = document.getElementById("input_number").value;
    if ( number_save.number_to_guess == input_number ) {
        number_save.guessed = true;
        game = JSON.parse( localStorage.getItem("game") );
        game.numbers.push(number_save)
        show_toast("🏆🎉 Well done, you guessed the number " + 
            number_save.number_to_guess + " in " + 
            number_save.attempts + " attempts " + "😁" +
            calculate_score(game.numbers))
        localStorage.setItem("game",JSON.stringify(game));
        localStorage.removeItem("number_to_guess");
        document.getElementById("enter_number").style.display = "none";
        document.getElementById("start_game").style.display = "block";
        let list_item = document.querySelectorAll(".list_item");
        for ( let item of list_item ){
            item.parentNode.remove();
        }
    } else {
        if ( number_save.number_to_guess < input_number ) {
            msg_toast = "The lucky number is less than " + input_number + " 🔽🔽🔽";
        } else {
            msg_toast = "The lucky number is greater than " + input_number + " 🔼🔼🔼";
        } 
        show_toast(msg_toast)
        localStorage.setItem("number_to_guess",JSON.stringify(number_save));
        let list = document.getElementById("list");
        let li = document.createElement("li");
        li.innerHTML = `<span class="list_item">${msg_toast}</span>`;
        list.append(li);
    }
});

