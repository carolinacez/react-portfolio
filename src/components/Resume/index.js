import React from 'react';
import Pdf from '../../assets/Documents/Resume.pdf' 

function Resume() {
    return (

        <section className="resume-section">
            <h1 className="resume">Resume</h1>
            <div className="resume-list">
            <p>Download my <a href={Pdf} alt="resume pdf">resume</a></p>
            <h2>Front-end Profeciencies </h2>
            <p>CSS</p>
            <p>JavaScript</p>
            </div>
            <div className="resume-list">
            <h2>Back-end Profeciencies </h2>
            <p>MongoDB</p>
            <p>Nodejs</p>
            </div>



            
            
        </section>
    )
}

export default Resume; 