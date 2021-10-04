import 'animate.css';
import { forwardRef, useRef } from 'react';
import './Project.scss';

import EachProject from '../../components/EachProject';

import snakey from '../../asset/snakey.png';
import jcellio from '../../asset/jcellio.jpg';
import jchat from '../../asset/jchat.jpg';
import hangman from '../../asset/hangman.jpg';
import { useInViewport } from 'react-in-viewport';
import { animationInView } from '../../utils/animationInView';

const Project = forwardRef((props, ref) => {
    const { isMobile } = props;

    const viewPortRef = useRef();
    const { inViewport, enterCount } = useInViewport(
        viewPortRef,
        {},
        { disconnectOnLeave: false },
        props
    );

    return (
        <section id="project" ref={ref}>
            <div
                className="project-inner-container section-container"
                ref={viewPortRef}
            >
                <h2
                    className={`project-title title ${animationInView(
                        inViewport,
                        'animate__fadeInLeft',
                        enterCount,
                        isMobile
                    )} animate__delay-1s`}
                >
                    Projects
                </h2>

                <div className="project-group-container">
                    <EachProject
                        screenshot={snakey}
                        year="2021"
                        name="Snakey"
                        desc="Classic Snake Game Built with React / TypeScript / Express"
                        isMobile={isMobile}
                    />
                    <EachProject
                        screenshot={jcellio}
                        year="2021"
                        name="JCellio"
                        desc="Drag and Drop Todo App Build with React / Node / PostgreSQL"
                        isMobile={isMobile}
                    />
                    <EachProject
                        screenshot={jchat}
                        year="2021"
                        name="JC Chat"
                        desc="Retro Chat Room built with React / Typescript / Node / Socket.io"
                        isMobile={isMobile}
                    />
                    <EachProject
                        screenshot={hangman}
                        year="2021"
                        name="Hangman"
                        desc="Hangman mini-game built with React"
                        isMobile={isMobile}
                    />
                </div>
            </div>
        </section>
    );
});

export default Project;
