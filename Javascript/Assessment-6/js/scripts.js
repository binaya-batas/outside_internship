const CANVAS_HEIGHT = window.innerHeight - 200;
const CANVAS_WIDTH = (CANVAS_HEIGHT * 6) / 8;
const GAP = CANVAS_HEIGHT/3;

const NUMBER_OF_PIPES = 2;
const PIPE_MIN_HEIGHT = CANVAS_HEIGHT/6;
const PIPE_MAX_HEIGHT = CANVAS_HEIGHT - PIPE_MIN_HEIGHT - GAP;
const PIPE_BOTTOM_HEIGHT = CANVAS_HEIGHT;
const PIPE_WIDTH = 60;
const PIPE_Y_TOP = 0;
const PIPE_SPEED = 5;

const BIRD_WIDTH = CANVAS_HEIGHT / 12;
const BIRD_HEIGHT = CANVAS_HEIGHT / 12;
const BASE_HEIGHT = CANVAS_HEIGHT/8;
const BASE_Y_POSITION = CANVAS_HEIGHT - BASE_HEIGHT;

const gameOverElem = document.querySelector("#game-over");
const startUiElem = document.querySelector("#start-ui");

let gameOver = false;
let isPlaying = false;
let score = 0;
let finalScore = 0;
let spacePressed = false;

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
      (this.topY = PIPE_Y_TOP),
      (this.bottomY = props.bottomY),
      (this.height = props.height),
      (this.bottomHeight = PIPE_BOTTOM_HEIGHT),
      (this.width = PIPE_WIDTH),
      (this.passed = false);
  }

  update() {
    this.x -= PIPE_SPEED;

    if (!this.passed && bird1.x > this.x + this.width) {
      score = score + 1;
      finalScore = Math.ceil(score / 2); //score is divided by 2 because the score increases each time after crossing top and bottom pipe.
      if (finalScore > localStorage.getItem("highScore")) {
        localStorage.setItem("highScore", finalScore);
      }
      this.passed = true;
    }
  }

  drawTopPipe() {
    ctx.drawImage(invertedPipeImg, this.x, this.topY, this.width, this.height);
  }

  drawBottomPipe() {
    ctx.drawImage(pipeImg, this.x, this.bottomY, this.width, this.bottomHeight);
  }

  checkBirdCollision() {
    if (gameOver) {
      return;
    }

    if (bird1.x + bird1.width >= this.x && bird1.x <= this.x + this.width) {
      if (bird1.y <= this.height || bird1.y + bird1.height >= this.bottomY) {
        gameOver = true;
        isPlaying = false;
      }
    }
  }
}

/**
 * creates pipes every second.
 */
function createPipes() {
  setInterval(function () {
    let pipeHeight =
      Math.floor(Math.random() * (PIPE_MAX_HEIGHT - PIPE_MIN_HEIGHT + 1)) +
      PIPE_MIN_HEIGHT;

    for (let i = 0; i < NUMBER_OF_PIPES; i++) {
      if (document.hasFocus()) {
        pipes.push(new Pipe({ height: pipeHeight, bottomY: pipeHeight + GAP }));
      }
    }
  }, 1500);
}

/**
 * draws and moves the pipes. Also checks collision with birds.
 */
function drawAndUpdatePipes() {
  pipes.forEach((pipe, index) => {
    pipe.update();
    pipe.drawTopPipe();
    pipe.drawBottomPipe();
    pipe.checkBirdCollision();

    // checks if obstacles have gone outside of the canvas.
    if (pipe.x <= 0) {
      pipes.splice(index, 1);
    }
  });
}

const GRAVITY = 0.9;
const BIRD_VELOCITY_Y = 1;
const BIRD_FLAP_SPEED = 4.5;

//Bird section
class Bird {
  constructor() {
    this.x = CANVAS_WIDTH / 2 - BIRD_WIDTH * 3;
    this.y = CANVAS_HEIGHT / 2 - BIRD_HEIGHT;
    this.width = BIRD_WIDTH;
    this.height = BIRD_HEIGHT;
    this.gravity = GRAVITY;
    this.vy = BIRD_VELOCITY_Y;
  }

  draw() {
    ctx.drawImage(birdImg, this.x, this.y, BIRD_WIDTH, BIRD_HEIGHT);
  }

  update() {
    if (this.y > CANVAS_HEIGHT - this.height) {
      this.y = CANVAS_HEIGHT - this.height;
      this.vy = 0;
    } else {
      this.vy += GRAVITY;
      this.vy *= GRAVITY;
      this.y += this.vy;
    }
    if (spacePressed) this.flap();
  }

  flap() {
    this.vy -= BIRD_FLAP_SPEED;
  }

  checkBaseCollision() {
    if (gameOver) {
      return;
    }

    if (bird1.y + bird1.height >= BASE_Y_POSITION) {
      gameOver = true;
      isPlaying = false;
    }
  }
}

let bird1 = new Bird();

/**
 *
 */
let animationID;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawAndUpdatePipes();
  ctx.drawImage(base, 0, BASE_Y_POSITION, CANVAS_WIDTH, BASE_HEIGHT);
  bird1.update();
  bird1.draw();
  bird1.checkBaseCollision();

  ctx.font = "20px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText(`High score: ${localStorage.getItem("highScore")}`, 50, 50);

  ctx.font = "40px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText(`${finalScore}`, CANVAS_WIDTH/2, CANVAS_HEIGHT/2 - 100);

  if (gameOver) {
    gameOverElem.style.display = "block";
    isPlaying = false;
    pipes = [];
    spacePressed = false;

    window.addEventListener("keyup", function (event) {
      if (event.key === " ") {
        if (isPlaying) {
          return;
        }

        document.location.reload();
        isPlaying = true;
        gameOver = false;
        // main();
      }
    });
  }
  animationID = window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (event) {
  if (event.key === " ") spacePressed = true;
});

window.addEventListener("keyup", function (event) {
  if (event.key === " ") spacePressed = false;
});


if (gameOver) cancelAnimationFrame(animationID);

function startGame() {
  animate();
  createPipes();
  bird1.draw();
  isPlaying = true;
  gameOver = false;
}

function main() {
  startGame();
}


startUiElem.style.display = "block";
window.addEventListener("keydown", function (event) {
  if (isPlaying) return;
  if (event.key === " ") {
    startUiElem.style.display = "none";
    main();
  }
});


