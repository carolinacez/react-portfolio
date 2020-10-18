import React from 'react'; 
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

function Footer() {
    return(
        <footer>
           <div className="contact-list">
           <a href="https://github.com/carolinacez"><img src={github} alt="gitHub icon" className="footer-contact"/></a>
           <a href="https://www.linkedin.com/in/carolinacabreraeguez/"><img src={linkedin} alt="linkedin icon" className="footer-contact"/></a>
           <a href="https://www.instagram.com/carolinacez/"><img src={instagram} alt="ig icon" className="footer-contact"/></a>
           </div>
        </footer>
    )
}

export default Footer;