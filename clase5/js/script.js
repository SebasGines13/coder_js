
// Exercise

class Product {
    // Properties
    constructor( name, price, stock ){
        this.name = name,
        this.price = price,
        this.stock = stock
    }

    // Methods
    get_data(){
        console.log( "======= Product =========" );
        console.log( "Name:", this.name );
        console.log( "Price:", this.price );
        console.log( "Stock:", this.stock );
        console.log( "" );
    }

    get_stock(){
        return (this.stock > 0);
    }

    set_sell( stock ){
        if ( typeof(stock) == "number" && stock >= 0 && this.stock >= stock ){
            this.stock = this.stock - stock;
            console.log( "Thanks for your purchase!" )
        } else {
            console.log( "No stock for this product!" )
        }
    }

    sell(){
        if ( this.stock > 0 ){
            this.stock --;
        }
    }

}

/***********************************************************************************/
// Products
/***********************************************************************************/
let product1 = new Product( "Lamp", 5000, 5 );
let product2 = new Product( "Monitor", 15000, 3 );
let product3 = new Product( "Mouse", 9000, 7 );

product1.get_data();
product2.get_data();
product3.get_data();

// Sell

let product_user = "Lamp";
if( product1.get_stock() ){
    let quantity = parseInt(prompt("How many units do you need?"))
    product1.set_sell(quantity);
    product1.get_data();
}
