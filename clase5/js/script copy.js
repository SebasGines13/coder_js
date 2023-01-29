// Class
class Student_Coder {

    constructor( name, last_name, dni, age ){
        // Properties
        this.name = name;
        this.last_name = last_name;
        this.dni = dni;
        this.age = age;
        this.grade_one = 0;
        this.grade_two = 0;
        this.grade_final = 0;
    }

    // Methods
    greet(){
        console.log( "Hi! my name is " + this.name + ", nice to meet you!" )
    }

    get_data(){
        console.log( "==============================================" )
        console.log( "============= Student's data =================" )
        console.log( "==============================================" )
        console.log( "Name:", this.name );
        console.log( "Last Name:", this.last_name );
        console.log( "Dni:", this.dni );
        console.log( "Age:", this.age);
        console.log( "Grade one:", this.grade_one);
        console.log( "" )
    }

    set_grade_one( grade ) {
        if ( typeof(grade) == "number" && grade > 0 && grade <= 10 ){
            this.grade_one = grade;
        }
    }

    set_grade_two( grade ) {
        if ( typeof(grade) == "number" && grade > 0 && grade <= 10 ){
            this.grade_two = grade;
        }
    }

    get_grades(){
        console.log( "Student name:", this.name );
        console.log( "Grade one:", this.grade_one );
        console.log( "Grade two:", this.grade_two );
    }

    get_state(){
        let average = ( this.grade_one + this.grade_two ) / 2;

        if( average >= 7 ) {
            return "promotes";
        }
        else if ( average >= 4 ){
            return "final";
        } 
        return "recurse";
    }
}


let student_one = new Student_Coder( "Pep", "Argent", 32142134, 32 );
let student_two = new Student_Coder( "Laura", "Rojas", 29435871, 28 );
//console.log( student_one )
//console.log( student_two )

student_one.greet();
student_one.set_grade_one(10);
student_two.set_grade_one(6);
student_one.set_grade_two(4);
student_two.set_grade_two(5);
//student_one.get_data();

student_one.get_grades();
student_two.get_grades();
console.log(student_one.get_state());
console.log(student_two.get_state());
