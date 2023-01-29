
function say_hello(){
    let user = prompt("Enter your name...")
    console.log("Hi " + user + "!")
}

function say_hi( name, lastname ){
    if ( name == "" || lastname == ""){
        console.log("Enter your name...")
    } else {
        console.log("Hi! your name is " + name + " and your lastname is " + lastname)
    }
}

function double_num ( number ){
    // double_num: return the double of the given number
    // number: int or float
    if ( typeof(number) == "number"){
        console.log( "The double of the number " + number + " is " + number * 2 )
    } else {
        console.log( "Please enter a number...")
    }
}

function  legal_age ( age ){
    // legal_age: return if the user is a legal age
    // age: age of the user
    if ( typeof(age) == "number"){
        if ( age >= 18 ){
            return true
        } return false
    } else {
        return false
    }
} 




say_hi("pep")
say_hi("")
double_num(10)
double_num(4.2)
double_num("hi")

if (legal_age(20)) {
    console.log("Welcome!")
} else {
    console.log("You cannot pass!")
}




