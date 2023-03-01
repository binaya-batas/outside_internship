class Building extends Sprite {
  constructor({ position = { x: 0, y: 0 }, activeTile }) {
    super({
      position,
      imgSrc: "assets/tower.png",
      frames: { max: BUILDING_FRAMES },
      offset: {
        x: 0,
        y: BUILDING_Y_OFFSET,
      },
    });
    // this.position = position;
    this.height = TILE_SIZE;
    this.width = this.height * 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.projectiles = [];
    this.projectileCount = 0;
    this.radius = BUILDING_RADIUS;
    this.activeTile = activeTile;
    this.health = 100;
  }

  draw() {
    super.draw();

    //health bar
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y - 100, this.width, 10);

    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x,
      this.position.y - 100,
      (this.width * this.health) / 100,
      10
    );

    //defense tower range
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 255, 0.08)";
    ctx.fill();
  }

  update() {
    this.draw();

    if (this.frames.current === 6 && this.target && this.frames.elapsed % this.frames.hold === 0) {
      this.projectiles.push(
        new Projectile({
          position: {
            x: this.center.x,
            y: this.center.y - 80,
          },
          enemy: this.target,
          health: this.health
        })
      );
    }
  }
}
