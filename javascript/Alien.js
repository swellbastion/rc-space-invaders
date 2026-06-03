export class Alien {
    constructor(x, y, width = 50, height = 50, xDirection = 1, speed = 0.25) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xDirection = xDirection;
        this.speed = speed;

        this.desiredYPosition = y; // aliens will gradually move down towards their desired y position;
    }

    isHittingLeftEdge = (levelWidth) => {
        return this.x < 0;
    };

    isHittingRightEdge = (levelWidth) => {
        return this.x > levelWidth - this.width;
    };

    tick = (timeDelta, levelWidth) => {
        if (this.isHittingLeftEdge(levelWidth)) {
            this.x = 0;
            this.xDirection = 1;
            this.desiredYPosition += this.height;
        }
        else if (this.isHittingRightEdge(levelWidth)) {
            this.x - levelWidth - this.width;
            this.xDirection = -1;
            this.desiredYPosition += this.height;
        }
        this.x += this.speed * this.xDirection * timeDelta;
        if (this.desiredYPosition > this.y) this.y += this.speed * timeDelta;
    };
};