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
        <section id="about" className="section-container" ref={ref}>
            <h2
                className={`about-title title ${animationInView(
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
                        I'm an self-motivated, aspiring Fullstack Developer.
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
                    <br />I graduated from University of California, Riverside
                    with Bachelor of Science in Electrical Engineering in 2015.
                    That's where I first learned programming with C++ and C, and
                    I also worked on quite a bit of Micro-controller
                    Programming. With my degree, I began my career as a
                    Procurement Engineer, but in 2019 I had a chance to use SQL
                    at work and fell in love with solving complex problems with
                    code. From that experience on, I began learning programming
                    on my own. I developed a new goal to work towards becoming a
                    Fullstack Developer, and I haven't gone a day without coding
                    and learning ever since!
                </p>
            </div>
            <Skill isMobile={isMobile} />
        </section>
    );
});

export default About;
