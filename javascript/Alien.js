// to fix some jankiness, only let aliens think they have hit a wall every 0.1 seconds
let wallHittingBuffer = 100;

// A sprite that moves left and right changing direction at the edges of the screen.
// Eventually they will be what you shoot at.
export class Alien {
    constructor(x, y, width = 50, height = 50, xDirection = 1, speed = 0.05) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xDirection = xDirection; // 1 = right, -1 = left
        this.speed = speed;

        this.desiredYPosition = y; // aliens will gradually move down towards their desired y position;
        this.lastTimeIHitAWall = 0;
    }

    // There is some duplicated code in these functions, but 
    // I'm not sure exactly how to fix that without making things less readable.

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

    // ("Tick" means "do the updates that you have to do inbetween frames")
    tick = (timeDelta, currentTime, levelWidth) => {
        if (this.isHittingLeftEdge(timeDelta, currentTime, levelWidth)) {
            this.xDirection = 1;
            this.desiredYPosition += this.height;
        }
        else if (this.isHittingRightEdge(timeDelta, currentTime, levelWidth)) {
            this.xDirection = -1;
            this.desiredYPosition += this.height;
        }
        
        // For slightly better smoothness of motion, we multiply our movement by the number 
        // of miliseconds that ellapsed between frames (in case it is not exactly 16.6666...)
        this.x += this.speed * this.xDirection * timeDelta;

            // When they hit either edge, aliens update their desiredYPosition to the next row down.
        if (this.desiredYPosition > this.y) this.y += this.speed * timeDelta;
    };
};