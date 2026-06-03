import {Renderer} from "./Renderer.js";

let renderer;
let counter = 0;

let loop = () => {
    renderer.clearScreen();
    renderer.ctx.fillRect(0 + counter, 0, 10, 10);
    counter++;
    window.requestAnimationFrame(loop);
};

let init = () => {
    let canvas = document.querySelector("#main-canvas");
    renderer = new Renderer(canvas);
    requestAnimationFrame(loop);
};

document.addEventListener("DOMContentLoaded", init);