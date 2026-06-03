import {Renderer} from "./Renderer.js";

let renderer;

let loop = () => {
    renderer.clearScreen();
    window.requestAnimationFrame(loop);
};

let init = () => {
    let canvas = document.querySelector("#main-canvas");
    let dpi = window.devicePixelRatio || 1;
    let images = {
        laserShooter: document.querySelector(".sprite.laserShooter"),
        alien1: document.querySelector(".sprite.alien1"),
    };
    renderer = new Renderer(canvas, dpi, images);
    renderer.fixCanvasResolution();
    requestAnimationFrame(loop);
};

document.addEventListener("DOMContentLoaded", init);