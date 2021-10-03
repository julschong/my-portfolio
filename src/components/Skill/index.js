import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { animationInView } from '../../utils/animationInView';
import './Skill.scss';

const skills = [
    'java',
    'javascript',
    'typescript',
    'html5',
    'css3',
    'react',
    'nodejs',
    'redux',
    'graphql',
    'docker',
    'linux',
    'postgresql',
    'aws',
    'google_cloud',
    'mongodb',
    'postman'
];

const Skill = (props) => {
    const { isMobile } = props;

    const myRef = useRef();
    const { inViewport, enterCount } = useInViewport(
        myRef,
        {},
        { disconnectOnLeave: false },
        props
    );

    return (
        <div className="skill" ref={myRef}>
            <h2
                className={`${animationInView(
                    inViewport,
                    'animate__fadeInDown',
                    enterCount,
                    isMobile
                )} animate__delay-1s`}
            >
                Language and Tools I have worked with
            </h2>
            <div className="skill-list">
                {skills.map((el, i) => (
                    <div key={el + i}>
                        <img
                            className={`${animationInView(
                                inViewport,
                                'animate__fadeInUp',
                                enterCount,
                                isMobile
                            )} animate__delay-${(i % 3) + 1}s`}
                            src={`/skills/${el}.svg`}
                            alt=""
                            width={60}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
