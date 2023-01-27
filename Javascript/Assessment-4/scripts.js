const WIDTH = "800px";
const HEIGHT = "800px";

let container = document.querySelector(".container");
container.style.width = WIDTH;
container.style.height = HEIGHT;
container.style.backgroundColor = "red";
container.style.position = "relative";

/**
 *
 * @returns number
 */
function generateUniqueRandomNumbers() {
  return Math.floor(Math.random() * 771); //Random number below 771 will keep the box inside of the container.
}

let boxPositionTop;
let boxPositionRight;

let initialPosition;
let direction;


function createBox() {
  direction = 1;
  // boxPositionTop = generateUniqueRandomNumbers();
  // boxPositionRight = generateUniqueRandomNumbers();
  let movingbox = document.createElement("div");
  movingbox.setAttribute("class", "box");
  movingbox.style.width = "10px";
  movingbox.style.height = "10px";
  movingbox.style.backgroundColor = "black";
//   movingbox.style.marginRight = initialPosition + "px";
//   movingbox.style.marginLeft = initialPosition + "px";
  movingbox.style.position = "absolute";
  // movingbox.style.top = boxPositionTop + 'px';
  // movingbox.style.right = boxPositionRight + 'px';
  container.appendChild(movingbox);
}

setInterval(function () {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    if (index % 2 === 0) {
        initialPosition = generateUniqueRandomNumbers();
        initialPosition += 10 * direction;
        box.style.right = initialPosition + "px";
        box.style.top = initialPosition + "px";
    
        if (initialPosition >= 790) {
          direction = -1;
          initialPosition = initialPosition + 10 * direction;
          box.style.right = initialPosition + "px";
          box.style.top = initialPosition + "px";
          console.log(box.style.marginLeft);
        } else if (initialPosition <= -5) {
          direction = +1;
          initialPosition = initialPosition + 5 * direction;
          box.style.right = initialPosition + "px";
          box.style.top = initialPosition + "px";
        }
    } else {
        initialPosition = generateUniqueRandomNumbers();
        initialPosition += 5 * direction;
        box.style.left = initialPosition + "px";
        box.style.top = initialPosition + "px";
    
        if (initialPosition >= 790) {
          direction = -1;
          initialPosition = initialPosition + 5 * direction;
          box.style.left = initialPosition + "px";
          box.style.top = initialPosition + "px";
        } else if (initialPosition <= 0) {
          direction = +1;
          initialPosition = initialPosition + 5 * direction;
          box.style.left = initialPosition + "px";
          box.style.top = initialPosition + "px";
        }
    }


    // box.style.top = box.getBoundingClientRect().top + 10 + 'px';
    //box.style.right = box.getBoundingClientRect().right;
  });
}, 300);


function createBoxes() {
  for (let i = 0; i < 10; i++) {
    createBox();
  }
}

createBoxes();
