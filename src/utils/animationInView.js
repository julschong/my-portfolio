export function animationInView(
    inViewport,
    animationType,
    enterCount,
    isMobile
) {
    if ((inViewport || enterCount > 0) && !isMobile) {
        return `animate__animated ${animationType}`;
    }

    return `animate__animated`;
}
