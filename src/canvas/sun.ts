import IRender from "@/canvas/iRender";
import {getCurrentHour} from "@/common/utils";
import moment from "moment";

export class Sun implements IRender {
    context: CanvasRenderingContext2D
    x = 100
    y = 100
    size = 100
    zoom = 1.5
    zoomSpeed = 0
    horizontalSpeed = 0.1
    verticalSpeed = 0.1
    raise = true
    clientWidth: number
    clientHeight: number


    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.clientWidth = width;
        this.clientHeight = height;
        this.init();
    }


    render(): void {
        const ctx = this.context;
        ctx.save();
        // todo: sun raise and sun set.
        ctx.beginPath();
        ctx.fillStyle = this.getCurrentSunGradient();
        // raise up sun y minus and scale reduce
        this.raise = getCurrentHour() <= 12;
        this.x += this.horizontalSpeed;
        this.y += this.verticalSpeed * (this.raise ? -1 : 1);
        this.zoom += this.zoomSpeed * (this.raise ? -1 : 1);
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.scale(this.zoom, this.zoom);
        ctx.restore();
    }

    reset(): void {
        this.size = 100
        this.zoom = 1
    }

    init(): void {
        const now = moment();
        const start = moment(now.format('YYYY-MM-DD 07:00:00'));
        // requestAnimationFrame 刷新频率一般为60hz，即60/s
        // am 7:00 - pm 17:00 total seconds
        const totalSeconds = (18 - 7) * 60 * 60;
        const totalRefreshTimes = totalSeconds * 60;
        // calc horizontal speed
        this.horizontalSpeed = this.clientWidth / totalRefreshTimes;
        // calc vertical speed
        this.verticalSpeed = (this.clientHeight / 3) / totalRefreshTimes;
        // calc zoom speed
        this.zoomSpeed = 1.5 / totalRefreshTimes;
        // calc init position
        const diff = now.diff(start, 'seconds');
        this.x = this.horizontalSpeed * diff;
        if (now.hours() <= 12) {
            this.raise = true;
            this.y = this.clientHeight / 3 - (this.verticalSpeed * diff) + this.size;
            this.zoom = 1.5 - this.zoomSpeed * diff;
        } else {
            this.raise = false;
            this.y = this.size + (this.verticalSpeed * diff);
            this.zoom = 1 + this.zoomSpeed * diff;
        }
    }

    getCurrentSunGradient(): CanvasGradient {
        const currentHour = getCurrentHour();
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const data = sunData.find(s => s.time == currentHour)!;
        // console.log(data);
        const startX = this.x - this.size;
        const startY = this.y - this.size;
        const gradient = this.context.createLinearGradient(startX, startY, startX, this.y + this.size);
        // todo: set sun color data
        // for (let i = 0; i < data.colorStops.length; i++) {
        //     const colorStop = data.colorStops[i];
        //     gradient.addColorStop(colorStop.offset, colorStop.color);
        // }
        gradient.addColorStop(.2, '#FFFFA6');
        gradient.addColorStop(.3, '#FFFFB5');
        gradient.addColorStop(.5, '#FFFB97');
        gradient.addColorStop(.7, '#FF8143');
        gradient.addColorStop(.9, '#D9533C');
        gradient.addColorStop(1, '#d48c6b');
        return gradient;
    }
}

export const sunData = [
    {
        time: 7,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 8,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 8,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 9,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 10,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 11,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 12,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 13,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 14,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 15,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    },
    {
        time: 16,
        speed: .02,
        zoom: 2,
        colorStops: [
            {
                offset: 0,
                color: ''
            }
        ]
    }
]
