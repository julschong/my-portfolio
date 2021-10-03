import './About.scss';
import { forwardRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import profile from '../../asset/profile.jpg';
import { animationInView } from './../../utils/animationInView';
import Skill from '../../components/Skill';

const About = forwardRef((props, ref) => {
    // Trigger if 200px is visible from the element

    const { isMobile } = props;

    const { inViewport, enterCount } = useInViewport(
        ref,
        null,
        { disconnectOnLeave: false },
        props
    );

    return (
        <section id="about" ref={ref}>
            <h2
                className={`about-title ${animationInView(
                    inViewport,
                    'animate__fadeInLeft',
                    enterCount,
                    isMobile
                )} animate__delay-1s`}
            >
                About Me
            </h2>
            <div className="about-container">
                <div
                    className={`profile-container ${animationInView(
                        inViewport,
                        'animate__fadeInLeft',
                        enterCount,
                        isMobile
                    )} animate__delay-2s`}
                >
                    <img
                        className="profile-pic"
                        src={profile}
                        alt="my-profile"
                    />
                    <p className="profile-caption">
                        My name is Julius Lee.
                        <br />
                        I'm an aspiring self movtivated Fullstack Developer.
                    </p>
                </div>
                <p
                    className={`my-story ${animationInView(
                        inViewport,
                        'animate__fadeInRight',
                        enterCount,
                        isMobile
                    )} animate__delay-2s`}
                >
                    Hi there!
                    <br />
                    Just a little bit of my background,
                    <br />I graduated from University of California, Riverside
                    with Electrical Engineering in 2015 where I first learned
                    programming with C++ and C and did quite a lot of
                    Microcontroller Programming. After I graduated, I started
                    working as a Procurement Engineer ever since. Then fast
                    forward to two years ago after I had a chance to use SQL at
                    work, I fell in love with solving complex problem with code,
                    so I decided to start learning programming on my own! I set
                    a goal for myself to work towards becoming a fullstack
                    developer and have been coding and learning everyday ever
                    since!
                </p>
            </div>
            <Skill isMobile={isMobile} />
        </section>
    );
});

export default About;
