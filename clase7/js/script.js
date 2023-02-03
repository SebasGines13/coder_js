// function anonymous 
/*
function salute(){
    console.log("Hi");
}

let salute = salute();


function double ( num ){
    return num * 2;
}

function triple ( num ){
    return num * 3;
}


console.log( "The double of the number is ", double(20));


function make_multiplicate( multiplicate ){
    return function( num ){
        return num * multiplicate;
    }
}

let double_num = make_multiplicate(2);
console.log( double_num(45) );


function salute( name ){
    console.log("Hi", name);
}

function salute_all ( arr, salute ){
    for(let student of arr ){
        salute(student);
    }
}

let student_list = [ "Pep", "Juan", "Marta", "Bianca" ];

salute_all(student_list, salute)


function double( num ){
    console.log("The number is", num);
    console.log("And the double is", num * 2);
}

let numbers = [ 1, 2, 3, 40, 98, 120 ];

numbers.forEach( double );



let student_list = [ 
    {name:"Pep", last_name:"Gomez", age:35}, 
    {name:"Federico", last_name:"Lopez", age:13}, 
    {name:"Marta", last_name:"Jimenez", age:18}, 
    {name:"Luis", last_name:"Ors", age:22}, 
    {name:"Marcos", last_name:"Torr", age:19}
];


function find_student ( student ){
    return student.name == "Marta";
}

function mayor_age ( student ){
    return student.age > 18;
}

let result_find = student_list.find( find_student );
console.log("Student Marta find:", result_find);

let result_filter = student_list.filter( mayor_age );
console.log("Result of filter ( age > 18 )", result_filter);
*/

// *********************************************************
// MAP
// *********************************************************
let products = [
    {name:"Lamp", price: 5000},
    {name:"TV", price: 12000},
    {name:"Radio", price: 6000},
    {name:"Mouse", price: 10000},
    {name:"Keyboard", price: 3000},
    {name:"Monitor", price: 15000},
];


function add_iva( product ){
    let iva = product.price * 0.21;
    return {
        name: product.name,
        price: product.price + iva
    }
}

let result_map = products.map( add_iva );
console.log( "Result map:", result_map );


console.log( "Result map with anonymous function:", products.map( (product)=>{
    return {
        name: product.name,
        price: product.price * 1.21
    }
} ) );

// *********************************************************
// REDUCE
// *********************************************************
function sum_prices( accumulated, product ){
    return accumulated += product.price;
}

let result_reduce = products.reduce( sum_prices, 0 );
console.log( "Result reduce: ", result_reduce );


// *********************************************************
// SORT
// *********************************************************
let city_list = ["Tokio", "Buenos Aires", "Los Angeles", "Portugal"];
console.log(city_list.sort());


function order_asc( a, b ){
    return a - b;
}

let number_list = [12, 122, 3, 20, 0, 10000];
console.log(number_list.sort( order_asc ));


// *********************************************************
// MATH
// *********************************************************
console.log( Math.PI );
console.log( Math.E );
console.log( "Max", Math.max(3, 20, 55, 12, 99, 102) )
console.log( "Min", Math.min(3, 20, 55, 12, 99, 102) )

// ceil
console.log( "Ceil:" , Math.ceil(3.3)  );
console.log( "Floor:", Math.floor(3.3) );
console.log( "Round:", Math.round(3.3) );

// *********************************************************
// DATE
// *********************************************************
let date = new Date();
console.log("Date complete:",date);
console.log("Date:",date.getDate() );
console.log("Month:", date.getMonth() + 1 );
console.log("Year:", date.getFullYear() );