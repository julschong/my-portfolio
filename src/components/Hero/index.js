import './hero.scss';

const Hero = () => {
    return (
        <div id="hero">
            <div class="hero-text">
                Hello there, I'm{' '}
                <span className="hero-text-name">Julius Lee</span>.
                <br />
                I'm a passionate, self taught fullstack developer!
                <br />
                <div class="hero-subtext">
                    I'm also a super nerd who loves
                    <br />
                    <ul>
                        <li>3D Printing</li>
                        <li>Basketball</li>
                        <li>Video Games</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
