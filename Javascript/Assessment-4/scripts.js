const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 800;
const BOX_WIDTH = 30;
const BOX_HEIGHT = 30;
const MAXIMUM_POSITION = 771;
const NUMBER_OF_BOXES = 10

let container = document.querySelector(".container");
container.style.width = CONTAINER_WIDTH + "px";
container.style.height = CONTAINER_WIDTH + "px";
container.style.backgroundColor = "red";
container.style.position = "relative";


/**
 *
 * @returns number
 */
function generateUniqueRandomNumbers(maximum) {
  return Math.floor(Math.random() * maximum); //Random number below 771 will keep the box inside of the container.
}


/**
 * creates a single box.
 * @param {*} topPosition 
 * @param {*} leftPosition 
 * @returns void
 */
function createBox(leftPosition, topPosition) {
  let box = document.createElement("div");
  let directionX = 1;
  let directionY = 1
  box.setAttribute("class", "box");
  box.style.width = BOX_WIDTH + "px";
  box.style.height = BOX_HEIGHT + "px";
  box.style.backgroundColor = "black";
  box.style.position = "absolute";
  box.style.top = topPosition + "px";
  box.style.left = leftPosition + "px";
  container.appendChild(box);
  animateBox(topPosition, leftPosition, directionX, directionY, box);
}

/**
 * creates boxes according to the NUMBER_OF_BOXES.
 */
function initializeBoxes() {
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    let initialPositionX = generateUniqueRandomNumbers(CONTAINER_WIDTH - BOX_WIDTH);
    let initialPositionY = generateUniqueRandomNumbers(CONTAINER_HEIGHT - BOX_HEIGHT);
    // let direction = Math.floor(Math.random() * 2);
    createBox(initialPositionX, initialPositionY);
  }
}


function animateBox(TopPosition, leftPosition, directionX, directionY, box) {
  setInterval(() => {
      if (leftPosition + BOX_WIDTH >= CONTAINER_WIDTH) {
        directionX = -1;
      }

      if (leftPosition <= 0) {
        directionX = 1;
      }

      if (TopPosition + BOX_HEIGHT >= CONTAINER_HEIGHT) {
        directionY = -1;
      }

      if (TopPosition <= 0) {
        directionY = 1;
      }
      
      TopPosition += 10 * directionY;
      leftPosition += 10 * directionX;

      box.style.top = TopPosition + "px";
      box.style.left = leftPosition+ "px"; 
  }, 100)
  collisionDetection(topPosition, leftPosition, directionX, directionY, box);
}


/**
 * Detects whether the boxes have collided.
 * @returns boolean
 */
function collisionDetection() {
  console.log("collided.")

  return true;
}



initializeBoxes();
