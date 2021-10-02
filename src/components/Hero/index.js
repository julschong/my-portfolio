import './Hero.scss';
import Game from './../Game/index';
import { FaArrowRight } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useState } from 'react';

const Hero = ({ aboutRef }) => {
    const [buttonHover, setButtonHover] = useState();

    return (
        <main id="hero">
            <div className="hero-text">
                Hello there, I'm{' '}
                <span className="hero-text-name">Julius Lee</span>.
                <br />
                I'm a passionate, self taught fullstack developer!
                <br />
                <button
                    className="hero-button"
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
                <div className="hero-subtext">
                    I also love
                    <ul>
                        <li>3D Printing</li>
                        <li>Basketball</li>
                        <li>My two cats</li>
                    </ul>
                </div>
            </div>
            <Game />
            <BsChevronDoubleDown
                id="hero-more-icon"
                className="animate__animated animate__heartBeat animate__infinite"
                size={40}
            />
        </main>
    );
};

export default Hero;
