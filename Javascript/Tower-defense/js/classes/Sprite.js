class Sprite {
    constructor({ position = { x: 0, y: 0 }, imgName}) {
        this.position = position,
        this.image = new Image();
        this.image.src = `assets/projectile.png`;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}