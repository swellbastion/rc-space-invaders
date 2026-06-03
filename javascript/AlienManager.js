export class AlienManager {
    constructor(renderer, alienArray) {
        this.renderer = renderer;
        this.alienArray = alienArray;
    }

    tick = (timeDelta) => {
        this.alienArray.forEach((alien) => {
            alien.tick(timeDelta, this.renderer.gameWidth);
            this.renderer.drawAlien(alien);
        });
    }
}