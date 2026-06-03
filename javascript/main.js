import {Renderer} from "./Renderer.js";
import {Alien} from "./Alien.js";
import {AlienManager} from "./AlienManager.js";
import {LaserShooter} from "./LaserShooter.js";
import {PlayerControls} from "./PlayerControls.js";

let timeOfLastFrame, renderer, playerControls, alienManager, laserShooter;

let loop = (currentTime) => {
    let timeDelta;
    if (!timeOfLastFrame) timeDelta = 0;
    else timeDelta = currentTime - timeOfLastFrame;
    
    renderer.clearScreen();
    alienManager.tick(timeDelta, currentTime);
    laserShooter.tick(playerControls, renderer.gameWidth);
    renderer.drawLaserShooter(laserShooter);

    timeOfLastFrame = currentTime;
    window.requestAnimationFrame(loop);
};

let init = () => {
    // create an instance of PlayerControls to listen for arrow keys being pressed
    playerControls = new PlayerControls();
    playerControls.startListening();

    // get <img> element refs to give to the renderer
    let images = {
        laserShooter: document.querySelector(".sprite.laserShooter"),
        alien1: document.querySelector(".sprite.alien1"),
    };

    // set up rendering
    let canvas = document.querySelector("#main-canvas");
    let dpi = window.devicePixelRatio || 1;
    renderer = new Renderer(canvas, dpi, images);
    renderer.fixCanvasResolution();

    // set up aliens data
    alienManager = new AlienManager(
        renderer,
        [
            new Alien(10, 10),
            new Alien(70, 10),
            new Alien(130, 10),
        ]
    );

    // make an instance of LaserShooter for the player to control
    laserShooter = new LaserShooter(225, 450);

    // start game loop
    requestAnimationFrame(loop);
};

document.addEventListener("DOMContentLoaded", init);