export class LaserShooter {
    constructor(x, y, width = 50, height = 50, speed = 3) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    tick(playerControls, gameWidth) {
        if (playerControls.controls.left && this.x >= 0) this.x -= this.speed;
        if (playerControls.controls.right && (this.x <= (gameWidth - this.width))) this.x += this.speed;
    }
}