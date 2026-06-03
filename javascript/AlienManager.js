// This class is for a collection of aliens.
// In the future this class might check if any of its aliens are colliding 
// with one another.
export class AlienManager {
    constructor(renderer, alienArray) {
        this.renderer = renderer;
        this.alienArray = alienArray;
    }

    // ("Tick" means "do the updates that you have to do inbetween frames")
    // In this case, tick all the child aliens and tell the renderer to draw each of them.
    tick = (timeDelta, currentTime) => {
        this.alienArray.forEach((alien) => {
            alien.tick(timeDelta, currentTime, this.renderer.gameWidth);
            this.renderer.drawAlien(alien);
        });
    }
}