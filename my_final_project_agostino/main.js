let container = document.getElementById("container");
let card = document.getElementsByClassName("card");

let n = 40;


for(let i = 0; i < n; i++){
    container.innerHTML += `<div class="card" onclick="turnCard(this)">?</div>`
}

const turnCard = (element) => {
    element.style.backgroundColor = 'blue'
}