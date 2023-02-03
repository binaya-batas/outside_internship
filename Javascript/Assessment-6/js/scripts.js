const CANVAS_HEIGHT = window.innerHeight - 200;
const CANVAS_WIDTH = (CANVAS_HEIGHT * 6) / 8;
const GAP = 150;
const PIPE_MIN_HEIGHT = 100;
const PIPE_MAX_HEIGHT = CANVAS_HEIGHT - PIPE_MIN_HEIGHT - GAP;
const BIRD_WIDTH = 50;
const BIRD_HEIGHT = 50;
const BASE_HEIGHT = 80;
const BASE_Y_POSITION = CANVAS_HEIGHT - BASE_HEIGHT;

const gameOverElem = document.querySelector("#game-over");

let gameOver = false;
let isPlaying = false;
let score = 0;


//canvas setup
const canvas = document.getElementById("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext("2d");


//background image
let background = new Image();
background.src = "assets/sprites/background-night.png";

background.onload = function () {
  ctx.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};


//base image
let base = new Image();
base.src = "assets/sprites/base.png";
base.onload = function () {
  ctx.drawImage(base, 0, BASE_Y_POSITION, CANVAS_WIDTH, BASE_HEIGHT);
};


//pipe image
let pipeImg = new Image();
pipeImg.src = "assets/sprites/pipe-green.png";
pipeImg.onload = function () {};


//inverted pipe
let invertedPipeImg = new Image();
invertedPipeImg.src = "assets/sprites/pipe-green-inverted.png";
invertedPipeImg.onload = function () {};


//bird image
let birdImg = new Image();
birdImg.src = "assets/sprites/redbird-downflap.png";
birdImg.onload = function () {
  ctx.drawImage(birdImg, this.x, this.y, BIRD_WIDTH, BIRD_HEIGHT);
};


//Pipe sections / obstacles
let pipes = [];
class Pipe {
  constructor(props) {
    (this.x = CANVAS_WIDTH),
      (this.topY = 0),
      (this.bottomY = props.bottomY),
      (this.height = props.height),
      (this.bottomHeight = 500),
      (this.width = 60),
      (this.color = "yellow");
  }

  update() {
    this.x -= 5;
  }

  drawTopPipe() {
    ctx.drawImage(invertedPipeImg, this.x, this.topY, this.width, this.height);
  }

  drawBottomPipe() {
    ctx.drawImage(pipeImg, this.x, this.bottomY, this.width, this.bottomHeight);
  }

  checkBirdCollision() {
    if (bird1.x + bird1.width >= this.x && bird1.x <= this.x + this.width) {
      if (bird1.y <= this.height || bird1.y + bird1.height >= this.bottomY) {
        gameOver = true;
      }
    }
  }

  //   checkScore() {
  //     if (bird1.x > this.x + this.width) {
  //       score++;
  //       console.log(score);
  //     }
  //   }
}


/**
 * creates pipes every second.
 */
function createPipes() {
  setInterval(function () {
    let pipeHeight =
      Math.floor(Math.random() * (PIPE_MAX_HEIGHT - PIPE_MIN_HEIGHT + 1)) +
      PIPE_MIN_HEIGHT;

    for (let i = 0; i < 2; i++) {
      if (document.hasFocus()) {
        pipes.push(new Pipe({ height: pipeHeight, bottomY: pipeHeight + GAP }));
      }
    }
  }, 1000);
}

/**
 * draws and moves the pipes. Also checks collision with birds.
 */
function drawAndUpdatePipes() {
  pipes.forEach((pipe, index) => {
    pipe.drawTopPipe();
    pipe.drawBottomPipe();
    pipe.update();
    pipe.checkBirdCollision();

    // checks if obstacles have gone outside of the canvas.
    if (pipe.x <= 0) {
      pipes.splice(index, 1);
    }
  });
}


//Bird section
class Bird {
  constructor() {
    this.x = CANVAS_WIDTH / 2 - BIRD_WIDTH;
    this.y = CANVAS_HEIGHT / 2 - BIRD_HEIGHT;
    this.width = BIRD_WIDTH;
    this.height = BIRD_HEIGHT;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.color = "red";
  }

  draw() {
    ctx.drawImage(birdImg, this.x, this.y, BIRD_WIDTH, BIRD_HEIGHT);
  }

  update() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
  }

  jump() {
    this.y -= 20;
  }

  checkBaseCollision() {
    if (bird1.y + bird1.height >= BASE_Y_POSITION) {
      console.log("collapsed");
      gameOver = true;
    }
  }
}

let bird1 = new Bird();


/**
 * 
 */
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawAndUpdatePipes();
  ctx.drawImage(base, 0, BASE_Y_POSITION, CANVAS_WIDTH, BASE_HEIGHT);
  bird1.draw();
  //   bird1.update();
  bird1.checkBaseCollision();

  if (gameOver) {
    gameOverElem.style.display = "block";
    isPlaying = false;
    pipes = [];

    window.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          document.location.reload();
        }
      });
  }
  requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    bird1.jump();
  }
});

function startGame() {
  isPlaying = true;
  if (isPlaying) {
    animate();
    createPipes();
    bird1.draw();
  }
}

function main() {
  startGame();
}

main();