
//console.log(fetch("https://pokeapi.co/api/v2/pokemon/pikachu"))

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then( response => response.json() )
    .then( data     => console.log(data) )


fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then( response => response.json() )
    .then( data     => console.log(data) )


function show_position( position ){
    let lat = position.coords.latitude
    let long = position.coords.longitude
    let key = "bbf8893c6e8030e157bb633d11a66e17"

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&long=${long}&appid=${key}&units=metric&lang=es`)
        .then( response => response.json() )
        .then( data     => {
            document.body.innerHTML = `<p>${data.name}</p>
                                       <p>Temp: ${data.main.temp}</p>
                                       <p>Weather: ${data.weather[0].description}</p>`
        } )
}

navigator.geolocation.getCurrentPosition( show_position )


fetch("products.json") //https://fakestoreapi.com/products
    .then( response => response.json() )
    .then( data     => console.log(data) )