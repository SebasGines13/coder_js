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
        return "\n\nYour Stats in this game :)\nPoints: " + this.points;
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
    if ( attempts <= 2 ){
        return accumulated += 4;
    } else if ( attempts <= 4){
        return accumulated += 2;
    } 
    return accumulated -= 1;
}


// Helper function to calculate the score
function calculate_score( numbers ){
    let points = numbers.reduce( sum_points, 0 );
    let score = new Score(numbers.length, points);
    let arr_user = JSON.parse(localStorage.getItem("arr_user"));
    let current_user_login = localStorage.getItem("current_user_login");
    let user_index = arr_user.findIndex( el => el.name == current_user_login );
    if ( user_index !== -1 ){
        arr_user[user_index].games ++;
        arr_user[user_index].points += points;
        localStorage.setItem("arr_user", JSON.stringify( arr_user ));
    }
    return score.get_summary();
}


function show_toast( msg ){
    Toastify({
        text: msg,
        duration: 2500,
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


function login_user(user_name, user_pass ){
    let arr_user = localStorage.getItem("arr_user")
    if (arr_user === "undefined" || arr_user === null) {
        return false
    } else {
        arr_user = JSON.parse(arr_user);
    }
    for (let user of arr_user) {
        if ( user.name == user_name && user.password == user_pass ){
            return true;
        } 
    }
    return false;
}

function new_user(username, password){
    let arr_user = localStorage.getItem("arr_user")
    if (arr_user === "undefined" || arr_user === null) {
        arr_user = [];
    } else {
        arr_user = JSON.parse(arr_user);
    }
    let user = {name: username, password: password, games: 0, points: 0};
    arr_user.push( user );
    let arr_JSON = JSON.stringify( arr_user );
    localStorage.setItem("arr_user", arr_JSON);
    document.getElementById("current_user_login").innerHTML = `<p style="display: inline-block;"class="text-light">Player: ${username} | Games history: 0 | Points: 0</p>`
}

function current_user(){
    let current_user_login = localStorage.getItem("current_user_login");
    let arr_user = JSON.parse(localStorage.getItem("arr_user"))
    let user_info = arr_user.find( el => el.name === current_user_login )
    document.getElementById("current_user_login").innerHTML = `<p style="display: inline-block;"class="text-light">Player: ${user_info.name} | Games history: ${user_info.games} | Points: ${user_info.points}</p>`
}

Swal.fire({
    title: 'Please login or register',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Login',
    showDenyButton: true,
    denyButtonColor: '#3085d6',
    denyButtonText: "Register",
    focusConfirm: false,    
    allowOutsideClick: false,
    backdrop: `
    rgba(0,0,0,1)
    url("./img/dice.gif")
    left top
    no-repeat`,
    preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
            Swal.showValidationMessage(`Please enter Username and Password`)
        } else if (!login_user(login, password)){
            Swal.showValidationMessage(`wrong user or password`)
        }
        return { login: login, password: password  }
    },  
    preDeny: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
            Swal.showValidationMessage(`Please enter Username and Password`)
        }
        return { login: login, password: password  }
    }
  }).then((result) => {
    localStorage.setItem("current_user_login", result.value.login)
    Swal.fire(`
      Welcome ${result.value.login}
    `.trim())
    if (!result.isConfirmed) {
        new_user(result.value.login, result.value.password)
    } else {
        current_user()
    }
  })
  

// Main function of the game
document.getElementById("start_game").addEventListener("click", ()=>{
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
        current_user()
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

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then( response => response.json() )
    .then( data     => {
        document.getElementById("btc_price").innerHTML = `<p style="display: inline-block;"class="text-light">${data.name} price: ${data.tickers[0].last} ${data.tickers[0].target}</p>`
} )

