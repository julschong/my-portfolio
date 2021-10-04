import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { animationInView } from '../../utils/animationInView';

const EachProject = (props) => {
    const { screenshot, year, name, desc, isMobile } = props;

    const viewPortRef = useRef();

    const { inViewport, enterCount } = useInViewport(
        viewPortRef,
        {},
        { disconnectOnLeave: false },
        props
    );
    return (
        <article
            ref={viewPortRef}
            className={`project-card animated__animated ${animationInView(
                inViewport,
                'animate__fadeInRight',
                enterCount,
                isMobile
            )} animate__delay-2s`}
        >
            <h3>{year}</h3>
            <hr />
            <p className="project-name">{name}</p>
            <p className="project-desc">{desc}</p>
            <div className="image-container">
                <img
                    className="project-picture"
                    src={screenshot}
                    alt={`${name} screenshot`}
                />
            </div>
        </article>
    );
};

export default EachProject;
