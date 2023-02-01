// Arrays
let person_list = ["Pep", "Jose", "Laura", "Kal"];
console.log( person_list )

person_list = "Pedro";
console.log( person_list )

// Index
person_list = ["Pep", "Jose", "Laura", "Kal"];
console.log( person_list[0] )
console.log( person_list[2] )
console.log( person_list[3] )

// Alter by index

person_list[1] = "Tommy";
console.log( person_list )

let random_list = [ 30, true, "Jose", 10.4, ["Red", "Blue", "Green"], 40, {name: "Marta", last_name:"Rojas"}];
console.log( random_list[4][1] )
console.log( random_list[6].name )
console.log( random_list[6].last_name )

 // Properties
 console.log( "Number of array elements: ", random_list.length );

 for ( let i = 0; i < random_list.length; i = i + 1 ) {
    console.log ( random_list[i] );
 }

 // Push
 person_list.push( "Marcos" );
 console.log( "Array after push: ", person_list );

 // Unshift
 person_list.unshift( "Roman" );
 console.log( "Array after unshift: ", person_list );

 // Pop
 let pop_result = person_list.pop();
 console.log( "Pop: ", pop_result );
 console.log( "Array after pop: ", person_list );

  // Shift
  let shift_result = person_list.shift();
  console.log( "Shift: ", shift_result );
  console.log( "Array after Shift: ", person_list );

  // Splice
  person_list.splice(1, 2, "Rodrigo");
  console.log( "Array after Splice: ", person_list );

  // Join
  let join_result = person_list.join(" - ");
  console.log( "Result of join: ", join_result );

  // Concat
  let color_list = [ "Red", "Blue", "Green" ];
  let concat_result = person_list.concat(color_list);
  console.log( "Result of concat: ", concat_result );

  // Slice
  let slice_result = concat_result.slice(2,5);
  console.log( "Result of slice: ", slice_result );
  console.log( "Array after slice: ", concat_result );

  // Include
  console.log( "Is Rodrigo on the array? : ", person_list.includes("Rodrigo") );
  console.log( "Is Juan on the array? : ", person_list.includes("Juan") );

  // IndexOf
  console.log( "The index of Rodrigo is: ", person_list.indexOf("Rodrigo") );
  console.log( "The index of Juan is: ", person_list.indexOf("Juan") );

  // Reverse (Alter the original array)
  console.log( "Array before reverse: ", person_list );
  person_list.reverse();
  console.log( "Array after reverse: ", person_list );
  