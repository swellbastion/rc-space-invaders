// This is the class for the player-controlled character.
export class LaserShooter {
    constructor(x, y, width = 50, height = 50, speed = 0.2) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    // ("Tick" means "do the updates that you have to do inbetween frames")
    // arrow keys = move
    tick(timeDelta, playerControls, gameWidth) {
        if (playerControls.controls.left && this.x >= 0) this.x -= this.speed * timeDelta;
        if (playerControls.controls.right && (this.x <= (gameWidth - this.width))) this.x += this.speed * timeDelta;
    }
}