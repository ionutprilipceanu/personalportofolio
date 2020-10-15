import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Link from 'gatsby-link';

function Footer() {
  return (
    <div className="footer">
      <ul className="componenteDesktop">
        <p>&copy;Iași România 2020</p>
      </ul>

       <ul className="logoItemsDesktop">
        <li><a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
        <li><a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /> </a></li>
        <li><a href="https://www.facebook.com/ionut.prilipceanu93/" target="_blank" rel="noreferrer" className="logoFacebook"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
      </ul> 

      <ul className="componentePhone">
      </ul>

      <ul className="logoItemsPhone">
        <li><a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
        <li><a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /> </a></li>
        <li><a href="https://www.facebook.com/ionut.prilipceanu93/" target="_blank" rel="noreferrer" className="logoFacebook"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
      </ul> 
    </div>
  )
}

export default Footer
