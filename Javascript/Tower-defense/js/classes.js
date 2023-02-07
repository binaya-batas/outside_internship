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
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.draw();

    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.position.y;
    const xDistance = waypoint.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);
    this.position.x += Math.cos(angle);
    this.position.y += Math.sin(angle);

    if (
      Math.abs(Math.round(this.position.x)) === Math.abs(Math.round(waypoint.x)) &&
      Math.abs(Math.round(this.position.y)) === Math.abs(Math.round(waypoint.y)) &&
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

        const yDistance = enemies[0].position.y - this.position.y;
        const xDistance = enemies[0].position.x - this.position.x;
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
        this.projectiles = [
            new Projectile({
                position: {
                    x: this.center.x,
                    y: this.center.y
                },
                enemy: enemies[0], 
            })
        ];
        this.radius = 250;
        this.target;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.fill();
    }
}
 