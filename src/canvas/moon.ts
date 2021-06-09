import IRender from "@/canvas/iRender";

export class Moon implements IRender {
    context: CanvasRenderingContext2D
    x: number
    y: number
    size = 100


    constructor(context: CanvasRenderingContext2D, x: number, y: number) {
        this.context = context;
        this.x = x;
        this.y = y;
    }

    render(): void {
        this.context.save();
        // todo: draw moon

        this.context.restore();
        console.log('render');
    }

    reset(): void {
        this.size = 100;
    }
}
