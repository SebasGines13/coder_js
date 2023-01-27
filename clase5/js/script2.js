
// Objects

let car_one = {
    color: "red",
    brand: "Fiat",
    owner: "Pep",
    patent: "ABC123" 
}

let car_two = {
    color: "yellow",
    brand: "Ferrari",
    owner: "Luisa",
    patent: "TRE142" 
}

console.log( car_one );
console.log( "Car Data" );
console.log( "Color:", car_one.color );
console.log( "brand:", car_one.brand );

console.log( car_two );
console.log( "Car Data" );
console.log( "Color:", car_two.color );
console.log( "brand:", car_two.brand );

// Constructor function 
function student ( name, last_name, dni, file ){
    this.name = name,
    this.last_name = last_name,
    this.dni = dni,
    this.file = file
}

let student1 = new student( "Pep", "Lopez", 32454123, "AXQ941" )
let student2 = new student( "Marta", "Rojas", 31452123, "HCW412")

console.log( student1 );
console.log( student2 );