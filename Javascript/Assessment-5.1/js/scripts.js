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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let background = new Image();
background.src = "assets/road.jpg";

background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

class Obstacles {
  constructor(props) {
    (this.x = props.x),
    (this.y = OBSTACLES_Y_POSITION),
    (this.vy = OBSTACLES_VELOCITY_Y),
    (this.height = OBSTACLES_HEIGHT),
    (this.width = OBSTACLES_WIDTH),
    (this.color = "blue");
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.vy;
  }

  checkCarCollision() {
    let scoreList = [];
    if (this.y + this.height - this.vy >= car1.y && this.x === car1.x) {
        scoreList.push(score);
        localStorage.setItem("highScore", scoreList )
        console.log(localStorage.getItem("highScore"));
        const playAgain = confirm(`Game over ☠️. Your score was ${score}. Do you want to play again?`);
        if (playAgain) {
            location.reload();
        } else {
            window.close();
        }
    }
  }

  increaseSpeed() {
    this.vy +=1;
  }
}


/**
 * creates obstacles every one second.
 */
let obstacles = [];
function createObstacles() {
    setInterval(function() {
        for (let i = 0; i < NUMBER_OF_OBSTACLES_PER_ROW; i++) {
          const random = Math.floor(Math.random() * OBSTACLES_X_POSITION.length);
          const positionX = OBSTACLES_X_POSITION[random];
          const newvy = 2;
          obstacles.push(new Obstacles({ x: positionX }));
          obstacles[i].increaseSpeed();
        }
    }, 1000)
}

/**
 * draws obstacles, moves it and splices it from the obstacles array after crossing the canvas.
 */
function drawAndMoveObstacles() {
  obstacles.forEach((obstacle, index) => {
    obstacle.draw();
    obstacle.move();
    obstacle.checkCarCollision();
    if (obstacle.y >= canvas.height) {
        obstacles.splice(index, 1);
    }
  });
}

class Car {
  constructor() {
    this.x = LANE_WIDTH + LANE_GAP;
    this.y = canvas.height - CAR_HEIGHT;
    this.width = CAR_WIDTH;
    this.height = CAR_HEIGHT;
    this.color = "red";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    // let image = new Image();
    // image.onloadsrc = "assets/car.png";
    // console.log(image);
    // ctx.drawImage(image, this.x, this.y, this.width, this.height);
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
function startGame() {
    const restartGame = alert("Do you want to start the game?");
    gameOn = true;
    if (gameOn) {
        setInterval(function() {
            score++;
        }, 1000)
    }
}

ctx.font = "30px Arial";
ctx.fillStyle = "white"; 
ctx.fillText("Hello World", 10, 50);


startGame();
createObstacles();
animate();
