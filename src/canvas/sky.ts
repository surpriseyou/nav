import Star from "@/canvas/star";
import Meteor from "@/canvas/meteor";
import IRender from "@/canvas/iRender";
import {dayGradientColor, getCurrentTimeRange, timeRangeOfDay} from "@/common/utils";

export default class Sky {
    width: number;
    height: number;
    context: CanvasRenderingContext2D;
    starCount: number;
    meteorCount: number;
    objects: IRender[] = [];


    constructor(context: CanvasRenderingContext2D, starCount = 0, meteorCount = 2) {
        this.context = context;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.starCount = starCount ?? this.height;
        this.meteorCount = meteorCount ?? 2;
    }

    setBackground = (): void => {
        const gradient = this.context.createLinearGradient(0, 0, 0, this.height);
        // get current color;
        // const hourOfDay = Math.random() * 23;
        // todo: this is test
        const minutes = new Date().getMinutes();

        const dayColor = dayGradientColor[minutes % 24];
        for (let i = 0; i < dayColor.stops.length; i++) {
            const stop = dayColor.stops[i];
            gradient.addColorStop(stop.offset, stop.color);
        }
        this.context.fillStyle = gradient;
        // star style
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = '#ffffff';
        this.context.strokeStyle = '#ffffff';
    }

    setWidgets = (): void => {

        const currentTimeRange = getCurrentTimeRange();
        // reset widgets.
        this.objects.length = 0;
        switch (currentTimeRange) {
            case timeRangeOfDay.dawn:
                // add stars
                if (this.starCount == 0) {
                    this.starCount = this.height;
                }
                for (let i = 0; i < this.starCount; i++) {
                    const star = new Star(this.context, this.width, this.height);
                    this.objects.push(star);
                }
                // add meteors.
                for (let i = 0; i < this.meteorCount; i++) {
                    this.objects.push(new Meteor(this.context, this.width, this.height));
                }

                break;
            case timeRangeOfDay.morning:
                break;
            case timeRangeOfDay.afternoon:
                break;
            case timeRangeOfDay.evening:
                break;
            case timeRangeOfDay.midnight:
                break;
        }

        // change widgets after an hour.
        setTimeout(this.setWidgets, 1000 * 60);
    }

    draw = (): void => {
        this.setWidgets();
        const animate = (): void => {
            //animate background
            this.setBackground();
            let len = this.objects.length;
            while (len--) {
                this.objects[len].render();
            }
            requestAnimationFrame(animate);
        }
        animate();
    }
}
