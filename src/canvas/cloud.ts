import IRender from "@/canvas/iRender";

export default class Cloud implements IRender {

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
        console.log('render');
    }

    reset(): void {
        console.log('reset');
    }

}
