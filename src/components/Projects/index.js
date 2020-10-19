import React from 'react'; 

function Projects({project}) {
    const { name, description, repo, deployed} = project; 
    return (
        <div className="project" key={name}>
            <h2 className="portfolio-description">
                    {description}
            </h2>
            <img
            className="image"
            src={require(`../../assets/${name}.jpg`)}
            alt=''
            />
            <div className="projectInfo">
            <div className="deployed-links">
                <a href={deployed} className="links">Deployed Link  </a>

                &
                   
                <a href={repo} className="links"> Repo Link</a>
            </div>

            </div>
        </div>
    )
}

export default Projects;