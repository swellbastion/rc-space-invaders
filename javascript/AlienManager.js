export class AlienManager {
    constructor(renderer, alienArray) {
        this.renderer = renderer;
        this.alienArray = alienArray;
    }

    tick = (timeDelta, currentTime) => {
        this.alienArray.forEach((alien) => {
            alien.tick(timeDelta, currentTime, this.renderer.gameWidth);
            this.renderer.drawAlien(alien);
        });
    }
}