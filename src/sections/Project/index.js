import 'animate.css';
import { forwardRef } from 'react';
import './Project.scss';

import EachProject from '../../components/EachProject';

import snakey from '../../asset/snakey.png';
import jcellio from '../../asset/jcellio.jpg';

const Project = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref}>
            <h2 className="project-title">Projects</h2>

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
            </div>
        </section>
    );
});

export default Project;
