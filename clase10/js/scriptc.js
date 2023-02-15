let client =[{name:"Pep", lastName:"Sanchez"}, {name:"Lucia", lastName:"Juarez"}];

let json_client = JSON.stringify(client);

console.log(client);
console.log(json_client);

localStorage.setItem("clients",json_client);
let recover_client = localStorage.getItem("clients");
console.log( recover_client );

// Parse
recover_client = JSON.parse( recover_client );
console.log( recover_client );