import React from 'react'; 
import aboutme from '../../assets/aboutme.jpg';

function About() {
    return(
        <section>
            <h1 className="about"> About Me </h1>
            <div className="aboutme">
            
            <img src={aboutme} alt="carolina"  className='pic' />
            <ul>
                    <p>
                        Hello! Welcome
                    </p>
                    <p>
                        My name is Carolina, a little bit about me: 
                    </p>
                    <p>
                    ✈ Born in <span>Bolivia</span>   
                    </p>
                    <p>
                    <span role="img" aria-label="sun">☀️</span>Living in the Sunshine State  
                    </p>
                    <p>
                    <span role="img" aria-label="cap">🎓</span>Johnson & Wales University Alumni
                    </p>
                    <p>
                    <span role="img" aria-label="script">📜</span>Ad & Marketing Bachelor's degree
                    </p>
                    <p>
                    <span role="img" aria-label="computer">💻</span>Full Stack Web Developer 
                    </p>
                    <p>
                    <span role="img" aria-label="taco">🌮</span>Taco specialist
                    </p>
                    <p>
                    <span role="img" aria-label="paws">🐾</span>Most importantly dog lover!
                    </p>
                </ul>

    
            
            </div>
        </section>

    )
}

export default About;