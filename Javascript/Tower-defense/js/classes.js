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
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.waypointIndex = 0;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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
      Math.round(this.position.x) === Math.round(waypoint.x) &&
      Math.round(this.position.y) === Math.round(waypoint.y) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}

class Building {
    constructor({ position = { x:0, y: 0}}) {
        this.position = position;
        this.height = 64;
        this.width = this.height * 2;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}