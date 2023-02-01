class Student{
    constructor(name, last_name, age){
        this.name = name;
        this.last_name = last_name;
        this.age = age
    }
}

let students_list = [];

for (let i = 0; i < 3; i++) {
    let name = prompt("Enter name");    
    let last_name = prompt("Enter last name");    
    let age = prompt("Enter age");
    students_list.push( new Student(name, last_name, age) );
}

console.log(students_list);

for( let student of students_list ){
    console.log(student)
}