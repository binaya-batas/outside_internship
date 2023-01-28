const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 800;
const BOX_WIDTH = 100;
const BOX_HEIGHT = 100;
const MAXIMUM_POSITION = 771;
const NUMBER_OF_BOXES = 3;
const SPEED = 20;



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
 * @param {*} box 
 * @returns void
 */
function createBox(box) {
  let boxElement = document.createElement("div");
  boxElement.setAttribute("class", "box");
  boxElement.style.width = BOX_WIDTH + "px";
  boxElement.style.height = BOX_HEIGHT + "px";
  boxElement.style.backgroundColor = "black";
  boxElement.style.position = "absolute";
  boxElement.style.top = box.topPosition + "px";
  boxElement.style.left = box.leftPosition + "px";
  container.appendChild(boxElement);
  animateBox(box, boxElement);
}

/**
 * creates boxes according to the NUMBER_OF_BOXES.
 */
let boxes = []
function initializeBoxes() {
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    let initialPositionX = generateUniqueRandomNumbers(CONTAINER_WIDTH - BOX_WIDTH);
    let initialPositionY = generateUniqueRandomNumbers(CONTAINER_HEIGHT - BOX_HEIGHT);

    while (boxes.some(box => Math.abs(box.topPosition - initialPositionX) <= BOX_WIDTH && Math.abs(box.leftPosition - initialPositionY) <= BOX_HEIGHT)) {
      initialPositionX = generateUniqueRandomNumbers(CONTAINER_WIDTH - BOX_WIDTH);
      initialPositionY = generateUniqueRandomNumbers(CONTAINER_HEIGHT - BOX_HEIGHT);
    }

    let box = {
      leftPosition: initialPositionX,
      topPosition: initialPositionY,
      directionX: 1,
      directionY: 1
    }
    boxes.push(box);
    createBox(box);
  }
}


function animateBox(box, boxElement) {
  setInterval(() => {
      if (box.leftPosition + BOX_WIDTH >= CONTAINER_WIDTH) {
        box.directionX = -1;
      }

      if (box.leftPosition <= 0) {
        box.directionX = 1;
      }

      if (box.topPosition + BOX_HEIGHT >= CONTAINER_HEIGHT) {
        box.directionY = -1;
      }

      if (box.topPosition <= 0) {
        box.directionY = 1;
      }
      
      box.topPosition += SPEED * box.directionY;
      box.leftPosition += SPEED * box.directionX;

      boxElement.style.top = box.topPosition + "px";
      boxElement.style.left = box.leftPosition+ "px";
      
      collisionDetection()
  }, 100)
}

/**
 * Detects whether the boxes have collided.
 * @returns
 */
function collisionDetection() {
  for (let i=0; i<boxes.length; i++) {
    for (let j=0; j<i; j++) {
      if (
        boxes[j].leftPosition <= boxes[i].leftPosition + BOX_WIDTH &&
        boxes[j].leftPosition + BOX_WIDTH >= boxes[i].leftPosition &&
        boxes[j].topPosition <= boxes[i].topPosition + BOX_HEIGHT &&
        BOX_HEIGHT + boxes[j].topPosition >= boxes[i].topPosition
      ) {
        boxes[j].directionX *= -1;
        boxes[j].directionY *= -1;
        boxes[i].directionX *= -1;
        boxes[i].directionY *= -1;
      }
    }
  }
}

// collisionDetection()

initializeBoxes();
