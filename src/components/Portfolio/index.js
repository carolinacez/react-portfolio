import React, { useState } from 'react';
import Projects from '../Projects';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'pic-1',
            description: 'API Movie Search',
            deployed: 'https://khargol1.github.io/project-1/',
            repo: 'https://github.com/carolinacez/movie-project-one.git'
        },
        {
            name: 'pic-2',
            description: 'Book Club - Full Stack',
            deployed: 'https://book-sequelizers.herokuapp.com/',
            repo: 'https://github.com/Dj-Viking/book-club.git'
        },
        {
            name: 'pic-3',
            description: 'girl_code',
            deployed: 'https://girl-code-project.herokuapp.com/',
            repo: 'https://github.com/carolinacez/WomenInTech.git'
        }
    ])
    return (
        <div className="portfolio">
            <h1 id="portfolio">Portfolio</h1>
            <div className="row"> 
            {projects.map((project, i) => (
                <Projects 
                project={project} 
                key={`project${i}`}
                />
            ))}
            </div>
        </div>
    )
}

export default Portfolio;