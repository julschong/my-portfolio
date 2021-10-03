import './Project.scss';
import 'animate.css';
import { forwardRef } from 'react';

const Project = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref}>
            Project
        </section>
    );
});

export default Project;
