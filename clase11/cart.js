let cart = [];

function add_to_cart(e){
    let child = e.target;
    let father = child.parentNode;
    let grandfather = father.parentNode;

    let product_name = father.querySelector("h5").textContent;
    let product_price = father.querySelector("span").textContent;
    let product_img = grandfather.querySelector("img").src;
    
    let product = {
        name: product_name,
        price: product_price,
        img: product_img,
        quantity: 1
    }
    cart.push(product);
    show_cart();
}

function erase_product(e){
    let grandfather = e.target.parentNode.parentNode
    let delete_product = grandfather.querySelector("p").textContent
    let cart_filter = cart.filter( ( p )=>{
        return p.name != delete_product;
    } );
    cart = cart_filter;
    show_cart();
}

function show_cart(){
    let table = document.getElementById("tbody");
    table.innerHTML = "";
    for( let product of cart ){
        let row = document.createElement("tr");
        row.innerHTML = `<td> <img src="${product.img}"</td>
                         <td> <p>${product.name}<p></td>
                         <td> ${product.quantity}</td>
                         <td> ${product.price}</td>
                         <td> <button class="btn btn-danger erase_product"> X </button></td>`
        table.append(row)
    }
    let btn_erase = document.querySelectorAll(".erase_product")
    for ( let btn of btn_erase){
        btn.addEventListener("click", erase_product);
    }
}

let btn_buy = document.querySelectorAll(".btnBuy");

for (let btn of btn_buy) {
    btn.addEventListener("click", add_to_cart)
}

document.getElementById("show_cart").addEventListener("click", ()=>{
    let cart = document.getElementById("cart");
    if( cart.style.display != "none" ){
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
})

