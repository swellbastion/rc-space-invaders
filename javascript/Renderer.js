export class Renderer {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    clearScreen = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
}