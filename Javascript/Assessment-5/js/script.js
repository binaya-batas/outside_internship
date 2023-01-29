const NUMBER_OF_BOXES = 3;
const BOX_HEIGHT = 100;
const BOX_WIDTH = 100;
const VELOCITY_X = 5;
const VELOCITY_Y = 2;


const particlesArray = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/**
 * class to create partices(boxes)
 */
class Particle {
  constructor() {
    this.x = Math.floor(Math.random() * (canvas.width - BOX_WIDTH));
    this.y = Math.floor(Math.random() * (canvas.height - BOX_HEIGHT));
    (this.vx = VELOCITY_X),
    (this.vy = VELOCITY_Y),
    (this.height = BOX_HEIGHT),
    (this.width = BOX_WIDTH),
    (this.color = "blue");
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.height, this.width);
    ctx.closePath();
    ctx.fill();
  }

  checkWallCollision() {
    if (
      this.y + this.vy > canvas.height - this.height ||
      this.y + this.vy < 0
    ) {
      this.vy = -this.vy;
    }
    if (
      this.x + this.vx > canvas.width - this.height ||
      this.x + this.vx < 0
    ) {
      this.vx = -this.vx;
    }
  }
}

//click action in canvas which destroyes particles(boxes)
canvas.addEventListener("click", destroyParticle);

/**
 * Destroys particles when clicked
 * @param {*} event 
 */
function destroyParticle(event) {
  let x = event.clientX - canvas.offsetLeft;
  let y = event.clientY - canvas.offsetTop;

  particlesArray.forEach((particle) => {
    if (
      x > particle.x &&
      x <= particle.x + particle.width &&
      y >= particle.y &&
      y <= particle.y + particle.height
    ) {
      console.log("hello");
      cancelAnimationFrame(animationId);
      ctx.clearRect(particle.x, particle.y, particle.width, particle.height);
    }
  });
}

/**
 * creates boxes according to the NUMBER_OF_BOXES
 */
function init() {
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    particlesArray.push(new Particle());
  }
}

/**
 * loops through particlesArray(list of boxes) and peforms action such as update position, draw the boxes in the canvas and check wall collision.
 */
function handleParticles() {
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
    particle.checkWallCollision();
  });
}

/**
 * animates the boxes.
 */
let animationId;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  checkParticleCollision();
  animationId = requestAnimationFrame(animate);
}

/**
 * checks collision between the particles(boxes)
 */
function checkParticleCollision() {
    for (let i=0; i<particlesArray.length; i++) {
        for (let j=i+1; j<particlesArray.length; j++) {
            if(particlesArray[j].x <= particlesArray[i].x + particlesArray[i].width &&
            particlesArray[j].x + particlesArray[j].width > particlesArray[i].x &&
            particlesArray[j].y <= particlesArray[i].y + particlesArray[i].height &&
            particlesArray[j].height + particlesArray[j].y >= particlesArray[j].y)
            {
                // particlesArray[j].vy *= -1;
                particlesArray[j].vx *= -1;
                particlesArray[i].vx *= -1;
                // particlesArray[i].vy *= -1;
            }
        }
    }
}

init();
animate();
