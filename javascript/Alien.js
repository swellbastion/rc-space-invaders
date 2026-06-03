export class Alien {
    constructor(x, y, width = 50, height = 50, direction = 1, speed = 0.25) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.speed = speed;
    }

    tick = (timeDelta) => {
        this.x += this.speed * timeDelta;
    };
};