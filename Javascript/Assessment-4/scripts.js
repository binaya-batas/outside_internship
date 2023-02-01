const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 800;
const BOX_WIDTH = 100;
const BOX_HEIGHT = 100;
const MAXIMUM_POSITION = CONTAINER_WIDTH - BOX_WIDTH;
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
let boxes = [];
function initializeBoxes() {
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    let initialPositionX, initialPositionY;
    let overlapping = true;

    while (overlapping) {
      initialPositionX = generateUniqueRandomNumbers(
        CONTAINER_WIDTH - BOX_WIDTH
      );
      initialPositionY = generateUniqueRandomNumbers(
        CONTAINER_HEIGHT - BOX_HEIGHT
      );
      overlapping = false;
    
      for (let j = 0; j < boxes.length; j++) {
        const otherBox = boxes[j];
        const distance = Math.sqrt(
          (initialPositionX - otherBox.leftPosition) ** 2 +
          (initialPositionY - otherBox.topPosition) ** 2
        );
      
        if (distance < BOX_WIDTH) {
          overlapping = true;
          break;
        }
      }
    }

    let box = {
      leftPosition: initialPositionX,
      topPosition: initialPositionY,
      directionX: 1,
      directionY: 1,
    };
    boxes.push(box);
    createBox(box);
  }
}

function animateBox(box, boxElement) {
  setInterval(() => {
    if (box.leftPosition + BOX_WIDTH + SPEED / 2 >= CONTAINER_WIDTH) {
      box.directionX = -1;
    }

    if (box.leftPosition - SPEED / 2 <= 0) {
      box.directionX = 1;
    }

    if (box.topPosition + BOX_HEIGHT + SPEED / 2 >= CONTAINER_HEIGHT) {
      box.directionY = -1;
    }

    if (box.topPosition - SPEED / 2 <= 0) {
      box.directionY = 1;
    }

    box.topPosition += SPEED * box.directionY;
    box.leftPosition += SPEED * box.directionX;

    boxElement.style.top = box.topPosition + "px";
    boxElement.style.left = box.leftPosition + "px";
    
    collisionDetection();

  }, 100);
}

/**
 * Detects whether the boxes have collided.
 * @returns
 */
function collisionDetection() {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      if (
        boxes[j].leftPosition <= boxes[i].leftPosition + BOX_WIDTH &&
        boxes[j].leftPosition + BOX_WIDTH >= boxes[i].leftPosition &&
        boxes[j].topPosition <= boxes[i].topPosition + BOX_HEIGHT &&
        BOX_HEIGHT + boxes[j].topPosition >= boxes[i].topPosition
      ) {
        boxes[j].directionX = -boxes[j].directionX;
        boxes[j].directionY = -boxes[j].directionY;
        boxes[i].directionX = -boxes[i].directionX;
        boxes[i].directionY = -boxes[i].directionY;
      }
    }
  }
}

// collisionDetection()

initializeBoxes();
