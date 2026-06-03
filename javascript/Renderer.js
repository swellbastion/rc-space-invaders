export class Renderer {
    constructor(canvas, dpi, images) {
        this.canvas = canvas;
        this.dpi = dpi;
        this.images = images;
        this.ctx = canvas.getContext("2d");
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
        this.ctx.drawImage(document.querySelector(".alien1"), 0, 0, 50, 50);
    };
}