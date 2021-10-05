import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { animationInView } from '../../utils/animationInView';

const EachProject = (props) => {
    const { screenshot, year, name, desc, isMobile, demoLink, gitHubLink } =
        props;

    const [modal, setModal] = useState(false);
    const containRef = useRef();

    const viewPortRef = useRef();

    const { inViewport, enterCount } = useInViewport(
        viewPortRef,
        {},
        { disconnectOnLeave: false },
        props
    );

    const clickOutside = (e) => {
        if (!containRef.current.contains(e.target)) setModal(false);
    };

    useEffect(() => {
        window.addEventListener('click', clickOutside);

        return () => {
            window.removeEventListener('click', clickOutside);
        };
    }, []);

    return (
        <article
            ref={viewPortRef}
            className={`project-card ${animationInView(
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
            <div
                className="image-container"
                ref={containRef}
                onClick={() => setModal(!modal)}
            >
                <img
                    className="project-picture"
                    src={screenshot}
                    alt={`${name} screenshot`}
                />
                <div
                    className={`project-modal`}
                    style={modal ? { opacity: 1 } : undefined}
                >
                    <div
                        className="project-modal-link-group"
                        style={
                            modal
                                ? { visibility: 'visible' }
                                : { visibility: 'hidden' }
                        }
                    >
                        <a href={gitHubLink} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href={demoLink} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default EachProject;
