let Fn;
let howMany;
const res = document.getElementById("res");

function question() {
const input = window.prompt("How many elements do you want to display?");
howMany = input;
}

function firstSeries() {
res.innerHTML = "";
question();
for (let n = 1; n <= howMany; n++){
    let Fn = n**2;
    //console.log(`F${n} = ${Fn}`);
    res.innerHTML += `<span class="number">${Fn}</span></br>`;
}   
}

function secondSeries() {
res.innerHTML = "";
question();
for (let n = 1; n <= howMany; n++){
    if (n === 1){
        Fn = 1;
    } else {
        Fn = Fn * 2;
    }
    //console.log(`F${n} = ${Fn}`);
    res.innerHTML += `<span class="number">${Fn}</span></br>`;
}   
}

function thirdSeries() {
res.innerHTML = "";     
question();

let prev;
let prevPrev;

for (let n = 1; n <= howMany; n++){
    if (n === 1 || n === 2){
        Fn = prev = prevPrev = 1;
    } else {
        Fn = prev + prevPrev;
    }

    //console.log(`F${n} = ${Fn}`);
    res.innerHTML += `<span class="number">${Fn}</span></br>`;

    prevPrev = prev;
    prev = Fn;
}   
}


function fourthSeries() {
res.innerHTML = "";
question();

let n = 0;
for (let num = 2; num < Infinity; num++) {
    const divisors = [];
        for (let i = 1; i < num; i++){
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    if (divisors.length === 1){
        n++;
        //console.log(`F${n} = ${num}`);
        res.innerHTML += `<span class="number">${num}</span></br>`;
    }
    if (n >= howMany){
        break;
    }
}
       
}
