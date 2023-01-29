

function interest( amount, quota){
    let interest;
    if ( quota == 3 ) {
        interest = amount * 0.15;
    }
    else if ( quota == 6 ) {
        interest = amount * 0.30;
    }
    else if ( quota == 12 ) {
        interest = amount * 0.70;
    }
    return interest;
}


console.log( "Welcome to  MoneyNow" );
let amount = parseInt(prompt( "Enter the amount..." ));
let quota  = parseInt(prompt( "Enter the number of quotas... 3, 6 or 12" ));
let total  = amount + interest( amount, quota );


console.log("\tYou requested: ", amount );
console.log("\tNumber of quotas: ", quota );
console.log("\tTotal: ", total );
console.log("\tAmount per Quota: ", ( total / quota ).toFixed(2) );
