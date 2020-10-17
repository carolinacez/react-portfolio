import React from 'react'; 

function Projects({project}) {
    const { name, description, repo, deployed} = project; 
    return (
        <div className="project" key={name}>
            <img
            className="image"
            src={require(`../../assets/${name}.jpg`)}
            alt=''
            />
            <div className="projectInfo">
                <p>
                    <a href={deployed} className="links">Deployed Link</a>
                    <a href={repo} className="links">Repo Link</a>
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Projects;