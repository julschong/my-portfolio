export function animationInView(inViewport, animationType, enterCount) {
    if (inViewport || enterCount > 0) {
        return `animate__animated ${animationType}`;
    }

    return ``;
}
