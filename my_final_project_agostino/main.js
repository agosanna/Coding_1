const gameContainer = document.querySelector(".game-container");

let playerName;
let cards;
let interval;
let firstCard = false;
let secondCard = false;
let firstCardValue;
let columns;
let rows;
let movesSorting = false;

let scores = JSON.parse(localStorage.getItem("scores")) || [];

// Array of items containing names and image paths
const items = [
  { name: "Amanda", image: "./assets/Amanda.png" },
  { name: "Ana", image: "./assets/Ana.png" },
  { name: "Andreas", image: "./assets/Andreas.png" },
  { name: "Ebrar", image: "./assets/Ebrar.png" },
  { name: "Hedda", image: "./assets/Hedda.png" },
  { name: "Joni", image: "./assets/Joni.png" },
  { name: "Kayoung", image: "./assets/Kayoung.png" },
  { name: "Louise", image: "./assets/Louise.png" },
  { name: "Mary", image: "./assets/Mary.png" },
  { name: "Max", image: "./assets/Max.png" },
  { name: "Merve", image: "./assets/Merve.png" },
  { name: "Nayoun", image: "./assets/Nayoun.png" },
  { name: "Roberto", image: "./assets/Roberto.png" },
  { name: "Roqaya", image: "./assets/Roqaya.png" },
  { name: "Samantha", image: "./assets/Samantha.png" },
  { name: "Sandra", image: "./assets/Sandra.png" },
  { name: "Simge", image: "./assets/Simge.png" },
  { name: "Titus", image: "./assets/Titus.png" },
  { name: "Vale", image: "./assets/Vale.png" },
  { name: "Young", image: "./assets/Young.png" },
];

// Generates a random order of items
const generateRandom = () => {
  let tempArray = [...items];
  let cardValues = [];
  for (let i = 0; i < columns * rows; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

//media queries for template grid
let mql = window.matchMedia("(max-width: 725px)");

const setScreenSize = () => {
  if (mql.matches) {
    console.log("mobile");
    columns = 5;
    rows = 8;
  } else {
    console.log("desktop");
    columns = 8;
    rows = 5;
  }
  gameContainer.style.gridTemplateColumns = `repeat(${columns},auto)`;
};


//display last game score
const displayLastGameScores = () => {
  // Retrieve the scores array from local storage or initialize it if it doesn't exist
  // Create a new score object for the current game
  let newScore = {
    player: playerName,
    moves: movesCount,
    minutes: (minutes),
    seconds: (seconds - 1), //this value is stored after the 1s delay when you win the game, so to display the correct time we have to subtract 1
  };

  // Add the current game score to the scores array
  scores.push(newScore);

  // Store the updated scores array back in the local storage
  localStorage.setItem("scores", JSON.stringify(scores));

  setHighscoreList();
};

//Initialize values and func calls
const initializer = () => {
  setScreenSize();
  result.innerText = "";
  hsContainer.innerHTML = "";
  pairsLeft = 20;
  matrixGenerator(generateRandom());
};

window.addEventListener("resize", setScreenSize);

