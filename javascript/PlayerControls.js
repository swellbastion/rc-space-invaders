// This class holds state for which buttons are pressed etc
export class PlayerControls {
    controls = {
        left: false,
        right: false,
    };

    startListening = () => {
        window.addEventListener("keydown", (event) => {
            if (event.code == "ArrowLeft") this.controls.left = true;
            else if (event.code == "ArrowRight") this.controls.right = true;
        });
        window.addEventListener("keyup", (event) => {
            if (event.code == "ArrowLeft") this.controls.left = false;
            else if (event.code == "ArrowRight") this.controls.right = false;
        });
    }
}