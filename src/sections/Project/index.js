import 'animate.css';
import { forwardRef } from 'react';
import './Project.scss';

import EachProject from '../../components/EachProject';

import snakey from '../../asset/snakey.png';
import jcellio from '../../asset/jcellio.jpg';
import jchat from '../../asset/jchat.jpg';
import hangman from '../../asset/hangman.jpg';

const Project = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref}>
            <div className="project-inner-container section-container">
                <h2 className="project-title title">Projects</h2>

                <div className="project-group-container">
                    <EachProject
                        screenshot={snakey}
                        year="2021"
                        name="Snakey"
                        desc="Classic Snake Game Built with React / TypeScript / Express"
                    />
                    <EachProject
                        screenshot={jcellio}
                        year="2021"
                        name="JCellio"
                        desc="Drag and Drop Todo App Build with React / Node / PostgreSQL"
                    />
                    <EachProject
                        screenshot={jchat}
                        year="2021"
                        name="JC Chat"
                        desc="Retro Chat Room built with React / Typescript / Node / Socket.io"
                    />
                    <EachProject
                        screenshot={hangman}
                        year="2021"
                        name="Hangman"
                        desc="Hangman mini-game built with React"
                    />
                </div>
            </div>
        </section>
    );
});

export default Project;
