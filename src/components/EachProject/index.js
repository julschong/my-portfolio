const EachProject = ({ screenshot, year, name, desc }) => {
    return (
        <article className="project-card">
            <h3>{year}</h3>
            <hr />
            <p className="project-name">{name}</p>
            <p className="project-desc">{desc}</p>
            <img
                className="project-picture"
                src={screenshot}
                alt={`${name} screenshot`}
            />
        </article>
    );
};

export default EachProject;
