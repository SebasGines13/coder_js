// *****************************************************
// Swal
// *****************************************************
/*
Swal.fire({
    title: "Congratulation!",
    text: "You win the game...",
    icon: "success",
    html:
    'You can use <b>bold text</b>, ' +
    '<a href="//sweetalert2.github.io">links</a> ' +
    'and other HTML tags',
    imageUrl: 'img/cha1.png',
    imageWidth: 100,
    imageHeight: 80,
    footer: "<a href=''>Google</a>",
    showClass: {
        popup: "animate__animated animate__bounce"
    },
    hideClass: {
        popup: "animate__animated animate__backOutDown"
    },
    color: "white",
    background: "black",
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6',
});
*/
// *****************************************************
// Toastify
// *****************************************************
let btn_number = document.getElementById("btn_number");

btn_number.addEventListener("click", ()=>{
    Toastify({
        text: "Number guess",
        duration: 800,
        gravity: "bottom",
        position: "center",
        style: {
            fontSize:"30px",
            fontFamily: "Verdana",
            color: "gray",
            background: "pink"
        }
    }).showToast();
})

// *****************************************************
// Luxon
// *****************************************************
/*
let dt = luxon.DateTime();
console.log(dt)
let today = dt.now();
console.log(today)
*/

// *****************************************************
// jQuery
// *****************************************************
$("#btn_hide").click(()=>{
    $("#container").hide();
})

$("#btn_show").click(()=>{
    $("#container").show();
})



