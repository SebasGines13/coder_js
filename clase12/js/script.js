/*
// ++ = +1

let num = 20;
num = num + 1;
num ++;
num --;

num += 20;
num *= 2;
console.log(num)


// ternary operator
// 20 > 30 ? alert("Hi") : alert("Bye");
let age = 21;

// conditional assignment
let can_vote = age >= 18 ? "Can vote!" : "Can not vote!";

console.log(can_vote)

// Falsy: NaN, null, 0, undefined, "", false
// AND ( AND returns the first falsy value or the last true one )
// OR ( OR returns the first TRUE value or the last FALSY value.)
// Nullish, only false on Null or undefined


// optional chaining
let client = document.getElementById("client_one");
console.log( client?.name || "User not found!");

*/

/********************************************************************************************/
// destructuring object
/********************************************************************************************/

let client_one = {
    names: "Pep",
    last_name: "Rojas",
    age: 30
};

let client__two = {
    names: "Marta",
    last_name: "Rivas",
    age: 20
};

let client_name = client_one.names;
console.log(client_name)

// Alias

let { names: client_name_one, last_name: client_last_name_one, age: age_client_one } = client_one;
let { names: client_name_two, last_name: client_last_name_two, age: age_client_two } = client__two;

console.log(client_name_one);
console.log(client_last_name_one);
console.log(age_client_one);
console.log(client_name_two);
console.log(client_last_name_two);
console.log(age_client_two);

/********************************************************************************************/
// destructuring arrays
/********************************************************************************************/
let student_list = ["Marcos", "Juana", "Pep", "Pedro", "Laura"];

//let student_one = student_list[0];
//let student_two = student_list[1];

let [ student_one, student_two, , student_four, student_five ] = student_list

console.log(student_one);
console.log(student_two);
console.log(student_four);
console.log(student_five);

/********************************************************************************************/
// ... Spread
/********************************************************************************************/
let another_array = [];

console.log(student_list);
console.log(...student_list)

another_array.push( ...student_list )
console.log(another_array);

let numbers = [ 3, 10, 20, 55, 34 ];

console.log(Math.max( ... numbers ))

let new_array = [ ...another_array, ...numbers ];
console.log(new_array);

let dog_one = {
    name: "Pon",
    race: "Dog"
}

let clone_dog_one = dog_one;

clone_dog_one.name = "Courage";
clone_dog_one.race = "Sausage";

console.log(dog_one);
console.log(clone_dog_one);

let clone_dog_two = {
    ...dog_one
}

clone_dog_two.name = "Pon2";
clone_dog_two.race = "Dog2";
console.log(clone_dog_two);


// Rest parameters

function greeting( ...students ){
    for (let student of students) {
        console.log("Hi:",student);  
    }
}

greeting("Pep", "Pedro", "Laura");


