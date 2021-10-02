import './Hero.scss';
import Game from './../Game/index';

const Hero = ({ aboutRef }) => {
    return (
        <div id="hero">
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
                >
                    View My Work
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
        </div>
    );
};

export default Hero;
