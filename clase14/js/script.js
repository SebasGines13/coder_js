/*
// ARROW
let say_hi = ()=> "Hi!!";
console.log( say_hi() )



// CALLBACKS

let car = [];

function add_car( callback ){
    setTimeout( ()=>{
        car.push("product");
        callback();
    }, 2000)
}

add_car( ()=>console.log( car ) );

*/

let car = [];

let add_car = new Promise( (resolve, reject)=> {
    setTimeout( ()=> {
        let time_load = Math.random();
        if ( time_load < 0.5 ){
            car.push("Product");
            resolve( car );
        } else {
            reject( "Error with load of product" );
        }
    }, 2000)
})


add_car
        .then( ()=>{
            console.log("OK");
            console.log(car);
        } )
        .catch( (msj_error)=> {
            console.log("Error");
            console.log(msj_error);
        })
        .finally( ()=> {
            console.log("Promise finalize!")
        } )