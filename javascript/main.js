import {Renderer} from "./Renderer.js";

let renderer;

let loop = () => {
    renderer.clearScreen();
    window.requestAnimationFrame(loop);
};

let init = () => {
    let canvas = document.querySelector("#main-canvas");
    let dpi = window.devicePixelRatio || 1;
    renderer = new Renderer(canvas);
    requestAnimationFrame(loop);
};

document.addEventListener("DOMContentLoaded", init);