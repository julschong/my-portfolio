import './Hero.scss';
// import Game from '../../components/Game/index';
import { FaArrowRight } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { forwardRef, useEffect, useState } from 'react';
import { ReactComponent as Print } from '../../asset/3dprint.svg';
import { ReactComponent as Hoop } from '../../asset/hoop.svg';
import PhotoFrame from '../../components/PhotoFrame';
import { useInViewport } from 'react-in-viewport';

const Hero = forwardRef(({ aboutRef }, ref) => {
    const [buttonHover, setButtonHover] = useState();
    const [svg, setSVG] = useState('3dprint');

    const { inViewport } = useInViewport(
        ref,
        null,
        { disconnectOnLeave: false },
        {}
    );

    useEffect(() => {
        if (!inViewport) {
            setSVG('3dprint');
        }
    }, [inViewport]);

    return (
        <main ref={ref} id="hero">
            <div className="hero-text animate__animated animate__fadeIn">
                Hello there,
                <br />
                I'm <span className="hero-text-name">Julius Lee</span>
                .
                <br />
                <span>I'm a passionate, self taught fullstack developer!</span>
                <br />
                <div className="hero-subtext animate__animated animate__fadeIn animate__delay-3s">
                    I also love to
                    <ul className="hero-hobby-container">
                        <li
                            className="hero-hobby"
                            onMouseEnter={() => {
                                setSVG('3dprint');
                            }}
                        >
                            3D Print
                        </li>
                        <li
                            className="hero-hobby"
                            onMouseEnter={() => {
                                setSVG('basketball');
                            }}
                        >
                            Play Basketball
                        </li>
                        <li
                            className="hero-hobby"
                            onMouseEnter={() => {
                                setSVG('cat');
                            }}
                        >
                            Play with My Cats
                        </li>
                    </ul>
                </div>
                <button
                    className="hero-button animate__animated animate__fadeIn animate__delay-5s"
                    onClick={() => {
                        aboutRef.current.scrollIntoView();
                    }}
                    onMouseEnter={(e) => setButtonHover(true)}
                    onMouseLeave={(e) => setButtonHover(false)}
                >
                    View My Work
                    <FaArrowRight
                        size={24}
                        style={{
                            transform: buttonHover ? 'rotate(90deg)' : ''
                        }}
                    />
                </button>
            </div>
            {/* <Game /> */}
            {svg === '3dprint' && (
                <Print className="hero-illustration animate__animated animate__fadeInRight " />
            )}
            {svg === 'basketball' && (
                <Hoop className="hero-illustration animate__animated animate__fadeInLeft " />
            )}
            {svg === 'cat' && <PhotoFrame />}
            <BsChevronDoubleDown
                id="hero-more-icon"
                className="animate__animated animate__heartBeat animate__infinite"
                size={60}
            />
        </main>
    );
});

export default Hero;
