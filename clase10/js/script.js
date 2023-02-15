let arr_user = [];

function new_user(){
    let user_name = document.getElementById("name");
    let user_pass = document.getElementById("password");
    let user = {name: user_name.value, password: user_pass.value};
    arr_user.push( user );

    let arr_JSON = JSON.stringify( arr_user );
    localStorage.setItem("arr_user", arr_JSON);
}

function login(){
    let arr = JSON.parse(localStorage.getItem("arr_user"));
    let user_name = document.getElementById("name").value;
    let user_pass = document.getElementById("password").value;

    for (let user of arr) {
        if ( user.name == user_name && user.password == user_pass ){
            document.body.innerHTML = `<div class="container">
                                       <h1>Welcome to the system ${user.name}</h1>
                                       <a href="index.html">Return</a>
                                       </div>`
        
        break;
        } else {
            document.body.innerHTML = `<div class="container">
                                       <h1>User not found ${user.name}</h1>
                                       <a href="index.html">Return</a>
                                       </div>`
        }
    }
}


let btn_register = document.getElementById("btn_register");
btn_register.addEventListener("click", new_user);


let btn_login = document.getElementById("btn_login");
btn_login.addEventListener("click", login );