export default interface IRender {

    context: CanvasRenderingContext2D;

    render(): void;

    reset(): void;
}
