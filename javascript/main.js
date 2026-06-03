import {Renderer} from "./Renderer.js";
import {Alien} from "./Alien.js";
import {AlienManager} from "./AlienManager.js";
import {LaserShooter} from "./LaserShooter.js";
import {PlayerControls} from "./PlayerControls.js";

// Data for some aliens that will be on the screen when the program starts.
// The numbers are for position, dimension, direction they are moving.
let beginningAlienSetup = [
    new Alien(10, 10, 50, 50, 1),
    new Alien(70, 10, 50, 50, 1),
    new Alien(130, 10, 50, 50, 1),
    new Alien(190, 10, 50, 50, 1),

    new Alien(440, 70, 50, 50, -1),
    new Alien(380, 70, 50, 50, -1),
    new Alien(320, 70, 50, 50, -1),
    new Alien(260, 70, 50, 50, -1),
];

// The global variables for the program.
let timeOfLastFrame, renderer, playerControls, alienManager, laserShooter;

// This is the game loop function which executes once every time your monitor refreshes.
let loop = (currentTime) => {
    // handle frame timing
    let timeDelta;
    if (!timeOfLastFrame) timeDelta = 0;
    else timeDelta = currentTime - timeOfLastFrame;
    
    renderer.clearScreen();

    // ("Tick" means "do the updates that you have to do inbetween frames")
    alienManager.tick(timeDelta, currentTime);
    laserShooter.tick(timeDelta, playerControls, renderer.gameWidth);

    // since there is only 1 laser shooter I am just telling the renderer to draw in in the game loop function
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
    alienManager = new AlienManager(renderer, beginningAlienSetup);

    // make an instance of LaserShooter for the player to control
    laserShooter = new LaserShooter(225, 450);

    // start game loop
    requestAnimationFrame(loop);
};

document.addEventListener("DOMContentLoaded", init);