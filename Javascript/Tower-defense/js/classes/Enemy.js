class Enemy extends Sprite {
  constructor(position = { x: 0, y: 0 }) {
    super({
      position,
      imgSrc: "assets/goblin.png",
      frames: { max: ENEMY_FRAMES },
    });
    this.position = position;
    this.width = ENEMY_WIDTH;
    this.height = ENEMY_HEIGHT;
    this.radius = ENEMY_RADIUS;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.waypointIndex = 0;
    this.health = ENEMY_HEALTH;
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    super.draw();

    //health bar
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y - 15, this.width, 10);

    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x,
      this.position.y - 15,
      (this.width * this.health) / 100,
      10
    );
  }

  update() {
    this.draw();

    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.center.y;
    const xDistance = waypoint.x - this.center.x;
    const angle = Math.atan2(yDistance, xDistance);

    const speed = ENEMY_SPEED;

    this.velocity.x = Math.cos(angle) * speed;
    this.velocity.y = Math.sin(angle) * speed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocity.x * speed) &&
      Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocity.y * speed) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}
