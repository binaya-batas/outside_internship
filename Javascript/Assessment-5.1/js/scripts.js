const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = (CANVAS_HEIGHT * 6) / 8;
const LANE_WIDTH = CANVAS_WIDTH / 3;
const LANE_GAP = 20;
const CAR_HEIGHT = CANVAS_HEIGHT / 8;
const CAR_WIDTH = CANVAS_WIDTH / 3 - 50;
const OBSTACLES_Y_POSITION = 20;
const OBSTACLES_X_POSITION = [
  LANE_GAP,
  LANE_WIDTH + LANE_GAP,
  LANE_WIDTH * 2 + LANE_GAP,
];
const OBSTACLES_HEIGHT = CANVAS_HEIGHT / 8;
const OBSTACLES_WIDTH = CANVAS_WIDTH / 3 - 50;
const OBSTACLES_VELOCITY_Y = 7;
const NUMBER_OF_OBSTACLES_PER_ROW = 2;
const OBSTACLES_VELOCITY_Y_INCREASE = 0.1;

let isPlaying;

const canvas = document.getElementById("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext("2d");

let background = new Image();
background.src = "assets/road.jpg";

background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

let obstacleImage = new Image();
obstacleImage.src = "assets/villian.png";
obstacleImage.onload = function () {
  // ctx.drawImage(obstacleImage, this.x, this.y, this.width, this.height);
};

let sound = new Audio("assets/smash.mp3");

class Obstacles {
  constructor(props) {
    (this.x = props.x),
      (this.y = OBSTACLES_Y_POSITION),
      (this.vy = props.vy),
      (this.height = OBSTACLES_HEIGHT),
      (this.width = OBSTACLES_WIDTH),
      (this.image = obstacleImage);
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.vy;
  }

  checkCarCollision() {
    setHighScore();
    if (this.y + this.height - this.vy >= car1.y && this.x === car1.x) {
      sound.play();
      isPlaying = false;
      document.location.reload();
      // cancelAnimationFrame(animationId);
    }
  }
}

/**
 * creates obstacles every one second.
 */
let obstacles = [];
function createObstacles() {
  let newvy = OBSTACLES_VELOCITY_Y;

  setInterval(function () {
    newvy += OBSTACLES_VELOCITY_Y_INCREASE; //increases speed of obstacles by 0.5 in every 1000ms

    for (let i = 0; i < NUMBER_OF_OBSTACLES_PER_ROW; i++) {
      const random = Math.floor(Math.random() * OBSTACLES_X_POSITION.length);
      const positionX = OBSTACLES_X_POSITION[random];
      obstacles.push(new Obstacles({ x: positionX, vy: newvy }));
    }
  }, 1000);
}

/**
 * draws obstacles, moves it and splices it from the obstacles array after crossing the canvas.
 */
function drawAndMoveObstacles() {
  obstacles.forEach((obstacle, index) => {
    obstacle.draw();
    obstacle.move();
    obstacle.checkCarCollision();

    //checks if obstacles have gone outside of the canvas.
    if (obstacle.y >= canvas.height) {
      obstacles.splice(index, 1);
    }
  });
}

let carImage = new Image();
carImage.src = "assets/car.png";
carImage.onload = function () {
  // ctx.drawImage(carImage, this.x, this.y, this.width, this.height);
};


class Car {
  constructor() {
    this.x = LANE_WIDTH + LANE_GAP;
    this.y = canvas.height - CAR_HEIGHT;
    this.width = CAR_WIDTH;
    this.height = CAR_HEIGHT;
    this.image = carImage;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += LANE_WIDTH;
  }

  moveLeft() {
    this.x -= LANE_WIDTH;
  }
}

//car object.
let car1 = new Car();

/**
 * animates obstacles.
 */
let animationId;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.font = "40px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, 50, 50);

  ctx.font = "40px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText(`Highscore: ${localStorage.getItem("highscore")}`, 50, 100);

  //renders background image.

  //renders car
  car1.draw();
  drawAndMoveObstacles();
  animationId = requestAnimationFrame(animate);
}

//event listener for right arrow.
window.addEventListener("keydown", pressDownRightArrow);
function pressDownRightArrow(event) {
  if (event.key === "ArrowRight") {
    if (car1.x > LANE_WIDTH * 2) {
      return;
    }
    car1.moveRight();
  }
}

//event listener for left arrow.
window.addEventListener("keydown", pressDownLeftArrow);
function pressDownLeftArrow(event) {
  if (event.key === "ArrowLeft") {
    if (car1.x < LANE_WIDTH) {
      return;
    }
    car1.moveLeft();
  }
}

let score = 0;
let highscore = 0;
function startGame() {
  if (!isPlaying) {
    ctx.font = "40px Calibri";
    ctx.fillStyle = "white";
    ctx.fillText("Press enter to start", 50, 100, 200);
  }
  isPlaying = true;
  if (isPlaying) {
    setInterval(function () {
      score++;
    }, 1000);
  }
}

function setHighScore() {
  if (score > localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", score);
  }
}

window.addEventListener("keyup", function (event) {
  if (isPlaying) {
    return;
  }
  if (event.key === "Enter") {
    startGame();
    createObstacles();
    animate();
  }
});
