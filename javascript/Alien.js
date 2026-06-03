export class Alien {
    constructor(x, y, width = 50, height = 50, xDirection = 1, speed = 0.25) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xDirection = xDirection;
        this.speed = speed;
    }

    tick = (timeDelta) => {
        this.x += this.speed * this.xDirection * timeDelta;
    };
};