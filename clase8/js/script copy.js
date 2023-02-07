
// Access Methods //

// getElementByID //
let title = document.getElementById("title_one");
console.log( title.innerText );
title.style.color = "red";


// getElementsByClassName //
let paragraphs = document.getElementsByClassName("paragraph")
console.log ( paragraphs );

console.log ( paragraphs[0].innerText );
console.log ( paragraphs[1].innerText );
console.log ( paragraphs[2].innerText );


// getElementByTagName //
let li = document.getElementsByTagName("li");
console.log( li )

for ( let element of li ){
    console.log ( element )
    console.log ( element.innerText )
}


let container = document.getElementById("conte");
container.innerHTML = "<p>Paragraph generated from JS</p>";
container.className = "paragraph-red";


// crateElement //
let paragraph_new = document.createElement("p");
paragraph_new.innerText = "Paragraph made from JS";
paragraph_new.className = "paragraph-red";

paragraph_new.style.fontSize = "30px";
paragraph_new.style.textAlign = "center";
paragraph_new.style.fontFamily = "Verdana";

// APPEND: method of father //
container.append( paragraph_new );

// REMOVE //
container.remove();

