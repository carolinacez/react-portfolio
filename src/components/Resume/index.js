import React from 'react';
import Pdf from '../../assets/Documents/Resume.pdf' 

function Resume() {
    return (

        <section className="resume-section">
            <h1 className="resume">Resume</h1>
            <div className="resume-list">
            <p>Download my resume <a href={Pdf} alt="resume pdf" className="resume-pdf">here</a></p>
            <h2>Front-end Proficiencies </h2>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
            <p>React</p>
            <h2>Back-end Proficiencies </h2>
            <p>APIs</p>
            <p>Nodejs</p>
            <p>SQL</p>
            <p>MongoDB</p>
            </div>
            </section>
    )
}

export default Resume; 