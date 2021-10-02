import './About.scss';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
    return (
        <main id="about" ref={ref}>
            <h2>About Me</h2>
            <p>
                Hi there!
                <br />
                Just a little bit of my background,
                <br />I graduated from University of California, Riverside with
                Electrical Engineering in 2015 where I first learned programming
                with C++ and C and did quite a lot of Microcontroller
                Programming. After I graduated, I started working as a
                Procurement Engineer ever since. Then fast forward to two years
                ago after I had a chance to use SQL at work, I fell in love with
                solving complex problem with code, so I decided to start
                teaching! I set a goal for myself to work towards becoming a
                fullstack developer and have been coding and learn everyday ever
                since!
            </p>
        </main>
    );
});

export default About;
