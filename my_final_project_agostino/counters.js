// Get HTML elements
const moves = document.getElementById("moves-count");
const pairs = document.getElementById("pairs-left-counter");
const timeValue = document.getElementById("time");

// Initialize time values
let seconds = 0,
  minutes = 0;
let secondsValue, minutesValue;

// Initialize moves and pairs count
let movesCount,
  pairsLeft;

// Timer function
const timeGenerator = () => {
  seconds += 1;

  // Check if minutes need to be incremented
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }

  // Format time before displaying
  secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  minutesValue = minutes < 10 ? `0${minutes}` : minutes;

  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

// Moves counter function
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// Pairs counter function
const pairsCounter = () => {
  pairsLeft -= 1;
  pairs.innerHTML = `<span>Pairs left:</span>${pairsLeft}`;
};
