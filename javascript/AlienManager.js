export class AlienManager {
    constructor(renderer, alienArray) {
        this.renderer = renderer;
        this.alienArray = alienArray;
    }

    tick = (timeDelta) => {
        this.alienArray.forEach((alien) => {
            alien.tick(timeDelta);
            this.renderer.drawAlien(alien.x, alien.y, alien.width, alien.height);
        });
    }
}