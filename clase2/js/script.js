/*
    2 grades are entered per keyboard
    If the average is greater than or equal to 7, the student is approved and regular.
    If it is less than 7 but greater than or equal to 4 the student recovers.
    If it is less than 4, the student not approved
*/

let nota1 = parseFloat(prompt("Enter nota 1: "))
let nota2 = parseFloat(prompt("Enter nota 2: "))
let average = (nota1 + nota2) / 2;
let regular = true;

if ( average >= 7 && regular ){
    alert("Average: " + average + " ----> Student approved");
} else if ( average >= 4 && regular ) {
    alert("Average: " + average + " ----> Student recovers");
} else if ( average < 4 || !regular) {
    alert("Average: " + average + " ----> Student not approved");
} else {
    alert("Error!");
}