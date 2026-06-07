export class Bullet {
    constructor(originX, originY, width = 1, height = 3, speed = 0.5) {
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.x = originX - this.width / 2;
        this.y = originY - this.height / 2;
    }

    tick = (timeDelta) => {
        this.y += this.speed * timeDelta;
    };
}