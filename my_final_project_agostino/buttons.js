// Get HTML elements
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const stopButton = document.getElementById("stop");
const result = document.getElementById("result");
const controls = document.querySelector(".endgame-container");
const sortButton = document.getElementById("sort");
const hsContainer = document.getElementById("highscore-list");

// Start game function
const startGame = () => {
  // Reset game values
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  pairsLeft = 20;

  // Hide/show buttons and controls
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  restartButton.classList.remove("hide");
  startButton.classList.add("hide");
  sortButton.classList.remove("hide");

  // Start timer
  clearInterval(interval);
  interval = setInterval(timeGenerator, 1000);

  // Initialize moves, pairs, and time
  moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
  pairs.innerHTML = `<span>Pairs Left:</span> ${pairsLeft}`;
  timeValue.innerHTML = `<span>Time:</span>00:00`;

  initializer();
};

startButton.addEventListener("click", startGame);

// Restart game function
restartButton.addEventListener("click", startGame);

// Stop game function
const stopGame = () => {
  // Hide/show buttons and controls
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  sortButton.classList.add("hide");

  clearInterval(interval); // Stop timer
};

stopButton.addEventListener("click", stopGame);

// Set highscore list function
const setHighscoreList = () => {
  let sortBy;

  if (movesSorting) {
    // Sort scores by moves
    scores.sort((a, b) => a.moves - b.moves);
    sortBy = 'time';
  } else {
    // Sort scores by time
    scores.sort((a, b) => (a.seconds + (a.minutes * 60)) - (b.seconds + (b.minutes * 60)));
    sortBy = 'moves';
  }

  console.log(scores);

  hsContainer.innerHTML = ""; // Clear existing content
  sortButton.innerHTML = `Sort by ${sortBy}`;

  const loopLimit = Math.min(scores.length, 10);
  for (let i = 0; i < loopLimit; i++) {
    let secondsScore;
    let minutesScore;
    const scoreContainer = document.createElement("div");

    if (movesSorting) {
      scoreContainer.innerText = `${i + 1}. ${scores[i].player} - Moves: ${scores[i].moves}`;
    } else {
      secondsScore = scores[i].seconds < 10 ? `0${scores[i].seconds}` : scores[i].seconds;
      minutesScore = scores[i].minutes < 10 ? `0${scores[i].minutes}` : scores[i].minutes;
      scoreContainer.innerText = `${i + 1}. ${scores[i].player} - Time: ${minutesScore}:${secondsScore}`;
    }

    scoreContainer.classList.add("list");
    hsContainer.appendChild(scoreContainer);
  }
};

sortButton.addEventListener("click", () => {
  movesSorting = !movesSorting; // Toggle sorting by moves/time
  setHighscoreList();
});
