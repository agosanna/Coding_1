const funFacts = {
    fruits: [],
    animals: [],
    gd: []
}

funFacts.fruits.push("Eating bananas before sleeping will make your skin yellow.", "Green fruits like kiwis and apples can help make your bones and teeth strong", "Apples give you more energy than coffee", "Bananas are berries, while strawberries are not because they have their seeds on the outside");
funFacts.animals.push("Capybaras can do push-ups with only one arm.", "The regal horned lizard squirts blood out of its eyes to repel attackers", "There are over 470 million dogs in the world", "Gorillas can catch human colds and other illnesses", "A newborn Chinese water deer is so small it can almost be held in the palm of your hand");
funFacts.gd.push("The oldest person alive in Schwaebisch Gmuend is 121 years old.", 
"The youngest person alive in Gmuend is 0 years old", "Visitors can enjoy a variety of attractions in Schwäbisch Gmünd, including observation towers, a forest adventure trail, and a Jurassic Park with dinosaurs", "The town has several institutions of higher education, including a university of education and a state high school for gifted children");

function addFruits() {
    let inputBox = document.getElementById("myInputBoxFruits");
    let newFactFruits = inputBox.value;
    funFacts.fruits.push(newFactFruits);
    console.log(funFacts.fruits);
}

function addAnimals() {
    let inputBox = document.getElementById("myInputBoxAnimals");
    let newFactAnimals = inputBox.value;
    funFacts.animals.push(newFactAnimals);
    console.log(funFacts.animals);
}

function addGd() {
    let inputBox = document.getElementById("myInputBoxGd");
    let newFactGd = inputBox.value;
    funFacts.gd.push(newFactGd);
    console.log(funFacts.gd);
}

const allFacts = funFacts.fruits.concat(funFacts.animals, funFacts.gd);

function showAll() {
    console.log(allFacts);
    document.getElementById("allFf").innerHTML = allFacts;
}


