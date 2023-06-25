const matrixGenerator = (cardValues) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
  
    // Simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
  
    // Generate card elements
    generateCardElements(cardValues);
  
    // Set grid template columns
    gameContainer.style.gridTemplateColumns = `repeat(${columns},auto)`;
  
    // Apply animation delay to each card
    dealingCardsAnimation();
  
    // Attach click event listener to each card
    cards.forEach((card) => {
        card.addEventListener("click", () => {
        handleCardClick(card);
        });
    });
  };
  
  const generateCardElements = (cardValues) => {
    for (let i = 0; i < columns * rows; i++) {
      gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
          <div class="card-before"><img src="./assets/back.png"/></div>
          <div class="card-after">
            <img src="${cardValues[i].image}" class="image"/>
          </div>
        </div>
      `;
    }
  };
  
  const dealingCardsAnimation = () => {
    cards = document.querySelectorAll(".card-container");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${(index % (columns * rows)) * 30}ms`;
    });
  };
  
  
  const handleCardClick = (card) => {
    if (!card.classList.contains("matched")) {
      if (!firstCard) {
        // Flip the first card
        card.classList.add("flipped");
        firstCard = card;
        firstCardValue = card.getAttribute("data-card-value");
      } else if (!card.classList.contains("flipped") && firstCard) {
        // Flip the second card and increment moves count
        card.classList.add("flipped");
        movesCounter();
        secondCard = card;
        let secondCardValue = card.getAttribute("data-card-value");
  
        if (firstCardValue == secondCardValue) {
          // If both cards match, add matched class and hide them after a delay
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
  
          //hide the matched cards after a delay of 0.3 sec
            var firstCardChilds = firstCard.querySelectorAll("*");
            var secondCardChilds = secondCard.querySelectorAll("*");
            setTimeout(() => {
              firstCardChilds.forEach((child) => {
                child.classList.add("hide");
              });
              secondCardChilds.forEach((child) => {
                child.classList.add("hide");
              });
            }, 1500);
  
          firstCard = false;
          pairsCounter();
  
          // Check if the game is over
          if (pairsLeft === 0) {
            result.innerHTML = `<h2>You Won</h2>
              <h4>Moves: ${movesCount} / Time: ${minutesValue}:${secondsValue}</h4>`;
            setTimeout(() => {
              stopGame();
              sortButton.classList.remove("hide");
              playerName = prompt('Put your name here', 'Name');
              displayLastGameScores();
            }, 1000);
          }
        } else {
          // If the cards don't match, flip them back to normal after a delay
          let [tempFirst, tempSecond] = [firstCard, secondCard];
          firstCard = false;
          secondCard = false;
  
          const flipBackCards = () => {
            tempFirst.classList.remove("flipped");
            tempSecond.classList.remove("flipped");
          };
  
          setTimeout(flipBackCards, 900);
        }
      } else {
        console.log("Card already selected");
      }
    }
  };
  
  