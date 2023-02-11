

class Projectile extends Sprite {
    constructor({ position = { x: 0, y: 0 }, enemy }) {
      super({ position, imgSrc: "assets/projectile.png" });
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.radius = PROJECTILE_RADIUS;
      this.enemy = enemy;
    }
  
    update() {
      this.draw();
  
      const yDistance = this.enemy.position.y - this.position.y;
      const xDistance = this.enemy.position.x - this.position.x;
      const angle = Math.atan2(yDistance, xDistance);
      
      const speed = PROJECTILE_SPEED;
  
      this.velocity.x = Math.cos(angle) * speed;
      this.velocity.y = Math.sin(angle) * speed;
  
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }