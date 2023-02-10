

let btn = document.getElementById("btn_todo");

btn.addEventListener("click", ()=>{
    let product = document.getElementById("product");
    let list = document.getElementById("list");

    let li = document.createElement("li");
    li.innerHTML = `<span>${product.value}</span>
                    <button class="btn-erase">❌</button>`;
    list.append(li);

    let btn_erase = document.querySelectorAll("div .btn-erase")

    for ( let btn of btn_erase ){
        btn.addEventListener("click", (e)=>{
            e.target.parentNode.remove();
        });
    }
});

