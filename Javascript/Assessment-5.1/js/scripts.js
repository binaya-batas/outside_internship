const LANE_WIDTH = 200;
const LANE_GAP = 20;
const CAR_WIDTH = 150;
const CAR_HEIGHT = 100;
const OBSTACLES_Y_POSITION = 20;
const OBSTACLES_X_POSITION = [20, 220, 420];
const OBSTACLES_HEIGHT = 100;
const OBSTACLES_WIDTH = 150;
const OBSTACLES_VELOCITY_Y = 7;
const NUMBER_OF_OBSTACLES_PER_ROW = 2;

const scorePoint = document.getElementById("score");
const highScorePoint = document.getElementById("high-score");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let background = new Image();
background.src = "assets/road.jpg";

background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

let obstacleImage = new Image();
obstacleImage.src = "assets/villian.png";
obstacleImage.onload = function () {
  ctx.drawImage(obstacleImage, this.x, this.y, this.width, this.height);
};

let sound = new Audio("assets/smash.mp3");

class Obstacles {
  constructor(props) {
    (this.x = props.x),
      (this.y = OBSTACLES_Y_POSITION),
      (this.vy = props.vy),
      (this.height = OBSTACLES_HEIGHT),
      (this.width = OBSTACLES_WIDTH),
      (this.image = obstacleImage)
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.vy;
  }

  checkCarCollision() {
    scorePoint.innerHTML = `Score: ${score}`;
    setHighScore();
    if (this.y + this.height - this.vy >= car1.y && this.x === car1.x) {
      sound.play();
      const playAgain = confirm(`Game over ☠️. Do you want to play again?`);
      if (playAgain) {
        location.reload();
      } else {
        window.close();
      }
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
    newvy += 0.5; //increases speed of obstacles by 0.5 in every 1000ms

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
  ctx.drawImage(carImage, this.x, this.y, this.width, this.height);
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

  //renders background image.
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  //renders car
  car1.draw();
  drawAndMoveObstacles();
  animationId = requestAnimationFrame(animate);
}

//event listener for right arrow.
window.addEventListener("keydown", pressRightArrow);
function pressRightArrow(event) {
  if (event.key === "ArrowRight") {
    if (car1.x > LANE_WIDTH * 2) {
      return;
    }
    car1.moveRight();
  }
}

//event listener for left arrow.
window.addEventListener("keydown", pressLeftArrow);
function pressLeftArrow(event) {
  if (event.key === "ArrowLeft") {
    if (car1.x < LANE_WIDTH) {
      return;
    }
    car1.moveLeft();
  }
}

let gameOn = false;
let score = 0;
let highscore = 0;
function startGame() {
  const startGame = alert("Do you want to start the game?");
  gameOn = true;
  if (gameOn) {
    setInterval(function () {
      score++;
    }, 1000);
  }
}

function setHighScore() {
  if (score > localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", score);
  }
  highScorePoint.innerHTML = `Highscore: ${localStorage.getItem("highscore")}`;
}

startGame();
createObstacles();
animate();
