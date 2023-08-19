let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");

const startButton = document.querySelector(".start-button");

function startGame() {
  startButton.style.display = "none"; // Hide the start button
  generateFaces(); // Start the game
}

function generateFaces() {

  for (let i = 0; i < numberOfFaces; i++) {
    const face = document.createElement("img");
    face.src = './assets/smile.png';
    randomTop = Math.floor(Math.random() * 400);
    randomLeft = Math.floor(Math.random() * 400);
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  }
  const extraFace = document.createElement("img");
  extraFace.src = './assets/smile.png';
  randomTop = Math.floor(Math.random() * 400);
  randomLeft = Math.floor(Math.random() * 400);
  extraFace.style.top = randomTop + "px";
  extraFace.style.left = randomLeft + "px";
  theLeftSide.appendChild(extraFace);

  const leftSideImages = theLeftSide.cloneNode(true); // Clone the entire left side
  leftSideImages.removeChild(leftSideImages.lastChild); // Remove last child
  theRightSide.appendChild(leftSideImages); // Append cloned node to right side

  extraFace.addEventListener("click", nextLevel); // Add event listener to the extra face


document.body.addEventListener("click", function(event) {
    
  if (event.target === startButton) {
    return; // Do nothing if the start button is clicked
  }
  
    if (event.target !== extraFace) {
      gameOver(); // Call gameOver only when the wrong face is clicked
    }
  });
}

function nextLevel(event) {
  event.stopPropagation();
  numberOfFaces += 5;
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }

  // Remove all child nodes from theRightSide
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  generateFaces();
}

function gameOver() {
  theLeftSide.removeEventListener("click", nextLevel);
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
  document.body.removeEventListener("click", startGame); // Remove startGame listener
  alert("Game Over");
}

