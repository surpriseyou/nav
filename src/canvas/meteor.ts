/*
* 流星 meteor
* */

import IRender from "@/canvas/iRender";

export default class Meteor implements IRender {
    clientWidth: number;
    clientHeight: number;
    x = 0;
    y = 0;
    len = (Math.random() * 80) + 10;
    speed = (Math.random() * 10) + 6;
    size = (Math.random()) + 0.1;
    // this is used so the shooting stars arent constant
    waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
    active = false;
    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.clientWidth = width;
        this.clientHeight = height;
        this.x = Math.random() * this.clientWidth;
    }

    render(): void {
        if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < 0 || this.y >= this.clientHeight) {
                this.reset();
            } else {
                this.context.lineWidth = this.size;
                this.context.beginPath();
                this.context.moveTo(this.x, this.y);
                this.context.lineTo(this.x + this.len, this.y - this.len);
                this.context.stroke();
            }
        } else {
            if (this.waitTime < new Date().getTime()) {
                this.active = true;
            }
        }
    }

    reset = (): void => {
        this.x = Math.random() * this.clientWidth;
        this.y = 0;
        this.len = (Math.random() * 80) + 10;
        this.speed = (Math.random() * 10) + 6;
        this.size = (Math.random()) + 0.1;
        // this is used so the shooting stars arent constant
        this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
        this.active = false;
    }
}
