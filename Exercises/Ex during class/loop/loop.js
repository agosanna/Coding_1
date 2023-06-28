let n = 0;
let paymentAmount = 2;
let interestRate = 0.02;
let years = 0;
let goal = 10;

while (n <= goal){

    n += paymentAmount;
    let interest = n * interestRate;
    n += interest;
    years ++
};

if (n > goal) {
    console.log(`it took ${years} years to reach my goal of ${goal} million dollars`);
}

for (let i = 1; i <=10; i++){
    console.log(i);
}

for (let i = 10; i >= 1; i--){
    console.log(i);
}