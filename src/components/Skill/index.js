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

const Skill = () => {
    return (
        <div className="skill">
            <h2>Language and Tools I have worked with</h2>
            <div className="skill-list">
                {skills.map((el, i) => (
                    <div>
                        <img
                            src={`/skills/${el}.svg`}
                            alt=""
                            key={el + i}
                            width={60}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
