//class PlacementTiles
class PlacementTile {
  constructor({ position }) {
    this.position = position;
    this.size = 64;
    this.color = "rgba(255, 255, 255, 0.15)";
    this.isOccupied = false;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  update(mouse) {
    this.draw();

    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size
    ) {
      this.color = "white";
    } else this.color = "rgba(255, 255, 255, 0.15)";
  }
}

class Enemy {
  constructor(position = { x: 0, y: 0 }) {
    this.position = position;
    this.width = 100;
    this.height = 100;
    this.radius = 50;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.waypointIndex = 0;
    this.health = 100;
    this.velocity = {
        x: 0,
        y: 0
    }
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    //health bar
    ctx.fillStyle = "red"
    ctx.fillRect(this.position.x - this.radius, this.position.y - this.radius - 15, this.width, 10);

    ctx.fillStyle = "green"
    ctx.fillRect(this.position.x - this.radius, this.position.y - this.radius - 15, this.width * this.health/100, 10);
  }

  update() {
    this.draw();

    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.position.y;
    const xDistance = waypoint.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);

    const speed = 3

    this.velocity.x = Math.cos(angle) * speed;
    this.velocity.y = Math.sin(angle) * speed;

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (
      Math.abs(Math.round(this.position.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x * speed) &&
      Math.abs(Math.round(this.position.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y * speed) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}

class Projectile {
    constructor({ position = { x: 0, y: 0}, enemy }) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.radius = 10;
        this.enemy = enemy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "orange";
        ctx.fill();
    }

    update() {
        this.draw();

        const yDistance = this.enemy.position.y - this.position.y;
        const xDistance = this.enemy.position.x - this.position.x;
        const angle = Math.atan2(yDistance, xDistance);
        const speed = 5;

        this.velocity.x = Math.cos(angle) * speed;
        this.velocity.y = Math.sin(angle) * speed;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

class Building {
    constructor({ position = { x:0, y: 0}}) {
        this.position = position;
        this.height = 64;
        this.width = this.height * 2;
        this.center = {
            x: this.position.x + this.width/2,
            y: this.position.y + this.height/2
        };
        this.projectiles = [];
        this.radius = 250;
        this.target;
        this.frames = 0;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        //defense tower range
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.fill();
    }

    update() {
        this.draw();

        if (this.frames % 100 === 0 && this.target) {
            this.projectiles.push(
                new Projectile({
                    position: {
                        x: this.center.x,
                        y: this.center.y
                    },
                    enemy: this.target, 
                })
            )
        }

        this.frames++;
    }
}
 