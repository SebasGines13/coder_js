// Async Await

let test = async function(){
    let result = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(result)
}

test()