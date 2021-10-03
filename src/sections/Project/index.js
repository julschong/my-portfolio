import './Project.scss';
import 'animate.css';
import { forwardRef } from 'react';

const Project = forwardRef((props, ref) => {
    return (
        <section id="contact" ref={ref}>
            Project
        </section>
    );
});

export default Project;
