import React, { useState } from 'react';
import Projects from '../Projects';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'pic-1',
            description: 'this is project 1',
            deployed: 'https://github.com',
            repo: 'https://github.com'
        },
        {
            name: 'pic-1',
            description: 'this is project 2',
            deployed: 'https://github.com',
            repo: 'https://github.com'
        },
        {
            name: 'pic-1',
            description: 'this is project 3',
            deployed: 'https://github.com',
            repo: 'https://github.com'
        }
    ])
    return (
        <div>
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