function say_hi(){
    let user_name = document.getElementById("user_name");
    console.log("Welcome", user_name.value);
}


function validate(){
    let name = document.getElementById("user_name");
    let message = document.getElementById("message");
    if ( name.value == "Pep" ){
        let paragraph = document.createElement("p");
        paragraph.innerText = "Welcome to the system " + name.value;
        paragraph.style.fontSize = "24px";
        message.append( paragraph );
    }
    else {
        document.body.innerHTML = `<div class="container">
                                        <h2>User Error</h2>
                                        <p class="paragraph-error">User ${name.value} not found</p>
                                        <a class="link-light" href="index.html">Return</a>
                                   </div>`
    }
}




