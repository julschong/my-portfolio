import { useEffect, useRef } from 'react';
import './Game.scss';
import { draw } from './gameUtil/draw';

const Game = () => {
    const canvasRef = useRef();
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const scrollY = useRef(0);

    useEffect(() => {
        console.dir(canvasRef.current);
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        window.addEventListener('resize', (e) => {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        });

        window.addEventListener('mousemove', (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
        });

        window.addEventListener('scroll', (e) => {
            scrollY.current = window.scrollY;
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;

        const render = () => {
            draw(context, 100, mouseX.current, mouseY.current, scrollY.current);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="hero-game" ref={canvasRef} />;
};

export default Game;
