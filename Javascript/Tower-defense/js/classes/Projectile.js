class Projectile extends Sprite {
    constructor({ position = { x: 0, y: 0 }, enemy }) {
      super({ position, imgSrc: "assets/projectile.png" });
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.radius = 10;
      this.enemy = enemy;
    }
  
    // draw() {
    //     ctx.beginPath();
    //     ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    //     ctx.fillStyle = "orange";
    //     ctx.fill();
    // }
  
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