// This class handles logic for drawing and otherwise handling graphical output.
export class Renderer {
    constructor(canvas, dpi, images) {
        this.canvas = canvas;
        this.dpi = dpi; // (this will probably be 2 instead of 1 if you have a retina display)
        this.images = images; // array of <img> element references
        this.ctx = canvas.getContext("2d"); // the "context" is the object with all the drawing functions that we need

        // store original width and height for collision detection uses later
        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;
    }

    // (logic to make sprites not look bad on retina displays)
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

    // draw the player character
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