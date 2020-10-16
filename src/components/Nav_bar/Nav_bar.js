import React, {Component} from 'react'
import './Nav_bar.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Link from 'gatsby-link';
import logo from "..//Nav_bar/images/logo.png"
import {Link} from 'react-scroll'






class Nav_bar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      hider: true,
      hiderFalse: false,
      size:"",
      sort:"",
    }
  }
  

  showNavBar () {
    this.setState({
      hider: !this.state.hider, 
      hiderFalse: !this.state.hiderFalse,
    })
  }


  render () {

    
    return (
      <div className="nav_body">

        <div className="logo">
          <Link to="home" className="link" ><img src={logo} alt="Logo"/></Link>
        </div>

        <div>
            {this.state.hider ? 
            <div className="nav-bar ">
              
              <ul className="nav-bar">
                <li>
                  <Link 
                  to="home" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  > Home </Link>
                </li>
                <li>
                <Link 
                  to="about" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  > About </Link>
                </li>
                <li>
                  <Link 
                  to="projects" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                  > Projects </Link>
                </li>
                <li>
                  <Link 
                  to="contact" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  >  Contact </Link>
                </li>
                <li><a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedinNav"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                <li><a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithubNav"> <FontAwesomeIcon icon={faGithub} /> </a></li>
                <li><a href="https://www.facebook.com/ionut.prilipceanu93/" target="_blank" rel="noreferrer" className="logoFacebookNav"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
              </ul>
            </div>
          :
          <div className="nav-barBack ">
            <ul className="nav-bar">
              <li>
                <Link 
                  to="home" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > Home </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                > About </Link>
              </li> 
              <li>
                <Link 
                  to="projects" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                > Projects </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >  Contact </Link>
              </li>
              <li><a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                <li><a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /> </a></li>
                <li><a href="https://www.facebook.com/ionut.prilipceanu93/" target="_blank" rel="noreferrer" className="logoFacebook"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
            </ul>
          </div>}
        </div>
          
          
        {this.state.hiderFalse ? 
        <div className="backgroundSide">
          <ul className="navSide">
          <li>
                <Link 
                  to="home" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                > Home </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                > About </Link>
              </li> 
              <li>
                <Link 
                  to="projects" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}
                > Projects </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >  Contact </Link>
              </li>
            <li>
              <div className="logoItems">
                <a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.facebook.com/ionut.prilipceanu93/" target="_blank" rel="noreferrer" className="logoFacebook"> <FontAwesomeIcon icon={faFacebook} /></a>
              </div>
            </li>
          </ul>
          <ul className="navSideSecond">
            <li>Ionuț Prilipceanu</li>
            <li>(+40) 751 684 142</li>
            <li>prilipceanu.ionut@gmail.com</li>
          </ul>
        </div>
        :
        <div className="backgroundSideBack" >
            <ul className="navSide">
            <li>
                <Link 
                  to="home" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                > Home </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                > About </Link>
              </li> 
              <li>
                <Link 
                  to="projects" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                > Projects </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  className="link" 
                  activeClass="activeNav"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >  Contact </Link>
              </li>
            </ul>
            <ul className="navSideSecond">
            <li>Ionuț Prilipceanu</li>
            <li>(+40) 751 684 142</li>
            <li>prilipceanu.ionut@gmail.com.com</li>
            </ul>
        </div>}
    

        <button className="burger" onClick={ () => this.showNavBar()} onKeyDown={ () => this.showNavBar()}>
          <div className="toggle"></div>
          <div className="toggle"></div>
          <div className="toggle"></div>
        </button>
        
      </div>
    )
  }
}  

export default Nav_bar;