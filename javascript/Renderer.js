export class Renderer {
    constructor(canvas, dpi, images) {
        this.canvas = canvas;
        this.dpi = dpi;
        this.images = images;
        this.ctx = canvas.getContext("2d");

        // store original width and height for collision detection later
        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;
    }

    fixCanvasResolution = () => {
        const initialWidth = this.canvas.width;
        const initialHeight = this.canvas.height;
        this.canvas.width = initialWidth * this.dpi;
        this.canvas.height = initialHeight * this.dpi;
        this.canvas.style.width = `${initialWidth}px`;
        this.canvas.style.height = `${initialHeight}px`;
        this.ctx.scale(this.dpi, this.dpi);
    };

    clearScreen = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    // draw an alien (also make it face the way it is travelling)
    drawAlien = (alien) => {
        this.ctx.drawImage(this.images.alien1, alien.x, alien.y, alien.width, alien.height);
    };

    drawLaserShooter = (laserShooter) => {
        this.ctx.drawImage(
            this.images.laserShooter, 
            laserShooter.x, 
            laserShooter.y, 
            laserShooter.width, 
            laserShooter.height,
        );
    };

}