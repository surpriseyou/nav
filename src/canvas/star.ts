/*
* star
* */

import IRender from "@/canvas/iRender";

export default class Star implements IRender {
    x: number;
    y: number;
    clientWidth: number;
    clientHeight: number;
    size: number = Math.random() * 2;
    speed: number = Math.random() * .05;
    context: CanvasRenderingContext2D;


    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.context = context;
        this.clientWidth = width;
        this.clientHeight = height;
    }

    render(): void {
        this.x -= this.speed;
        if (this.x < 0) {
            this.reset();
        } else {
            this.context.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    reset = (): void => {
        this.size = Math.random() * 2;
        this.speed = Math.random() * .05;
        this.x = this.clientWidth;
        this.y = Math.random() * this.clientHeight;
    }
}
