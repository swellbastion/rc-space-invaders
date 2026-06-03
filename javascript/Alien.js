// to fix some jankiness, only let aliens think they have hit a wall every 0.1 seconds
let wallHittingBuffer = 100;

export class Alien {
    constructor(x, y, width = 50, height = 50, xDirection = 1, speed = 0.15) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xDirection = xDirection;
        this.speed = speed;

        this.desiredYPosition = y; // aliens will gradually move down towards their desired y position;
        this.lastTimeIHitAWall = 0;
    }

    isHittingLeftEdge = (timeDelta, currentTime, levelWidth) => {
        if (
            ((currentTime - this.lastTimeIHitAWall) > wallHittingBuffer)
            &&
            (this.x < 0)
        ) {
            this.lastTimeIHitAWall = currentTime;
            return true;
        }
        return false;
    };

    isHittingRightEdge = (timeDelta, currentTime, levelWidth) => {
        if (
            ((currentTime - this.lastTimeIHitAWall) > wallHittingBuffer)
            &&
            (this.x > levelWidth - this.width)
        ) {
            this.lastTimeIHitAWall = currentTime;
            return true;
        }
        return false;
    };

    tick = (timeDelta, currentTime, levelWidth) => {
        if (this.isHittingLeftEdge(timeDelta, currentTime, levelWidth)) {
            this.xDirection = 1;
            this.desiredYPosition += this.height;
        }
        else if (this.isHittingRightEdge(timeDelta, currentTime, levelWidth)) {
            this.xDirection = -1;
            this.desiredYPosition += this.height;
        }
        this.x += this.speed * this.xDirection * timeDelta;
        if (this.desiredYPosition > this.y) this.y += this.speed * timeDelta;
    };
};