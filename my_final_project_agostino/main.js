let container = document.getElementById("container");
let card = document.getElementsByClassName("card");
let flippedCards = [];

let n = 20;


for(let i = 1; i <= n; i++){
    container.innerHTML += 
    `<div class="card" onclick="flipCard(this.querySelector('.front'))">
        <img class="front" id="img_${i}" src="./assets/${i}.jpg">
        <img class="back" src= "./assets/back.png">
    </div>
    <div class="card" onclick="flipCard(this.querySelector('.front'))">
        <img class="front" id="img_${i}" src="./assets/${i}.jpg">
        <img class="back" src= "./assets/back.png">
    </div>`
}

const flipCard = function(element){
    element.style.zIndex = "1";
    flippedCards.push(element.id)
    if (flippedCards.length === 2){
        compareCards();
    }
}

    const compareCards = () => {
        if (flippedCards[0] === flippedCards[1]) {
            console.log('MATCH');
        } else {
            console.log('NO MATCH');

        }
        flippedCards = [];
    };
