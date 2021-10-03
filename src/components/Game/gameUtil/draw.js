export const draw = (ctx, frameCount, x, y, scrollY) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(
        x,
        y + scrollY,
        20 * Math.sin(frameCount * 0.05) ** 2,
        0,
        2 * Math.PI
    );
    ctx.fill();
};
