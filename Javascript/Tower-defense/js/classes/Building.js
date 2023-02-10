class Building extends Sprite {
  constructor({ position = { x: 0, y: 0 }, activeTile }) {
    super({
      position,
      imgSrc: "assets/tower.png",
      frames: { max: 19 },
      offset: {
        x: 0,
        y: -80,
      },
    });
    this.position = position;
    this.height = 64;
    this.width = this.height * 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.projectiles = [];
    this.projectileCount = 0;
    this.radius = 250;
    this.projectileInterval = 0;
    this.activeTile = activeTile;
  }

  draw() {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    super.draw();

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
        })
      );
    }

    this.projectileInterval++;
  }
}
