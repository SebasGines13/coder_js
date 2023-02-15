// STORAGE 


// LOCAL STORAGE
// setItem
localStorage.setItem("user_name_one", "Pep");
localStorage.setItem("age_user_one",30);
localStorage.setItem("colors", ["Red","Blue","Green"])

// getItem
let name_user_one = localStorage.getItem("user_name_one");
let age_user_one = localStorage.getItem("age_user_one");
let colors = localStorage.getItem("colors");

console.log(name_user_one);
console.log(age_user_one);
console.log(colors);
console.log(typeof colors);

// SESSION STORAGE
sessionStorage.setItem("user_name_two","Luis");

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}

// remove
localStorage.removeItem("colors");

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}

// clear
localStorage.clear();
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}