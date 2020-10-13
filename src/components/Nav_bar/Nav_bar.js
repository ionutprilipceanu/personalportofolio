import React, {Component} from 'react'
import './Nav_bar.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'gatsby-link';
import logo from "..//Nav_bar/images/logo.png"






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
          <Link to="/" className="link" ><img src={logo} alt="Logo"/></Link>
        </div>

        <div>
            {this.state.hider ? 
            <div className="nav-bar ">
              
              <ul className="nav-bar">
                <li>
                  <Link to="/" className="link" activeClassName="activeNav"> Home </Link>
                </li>
                <li>
                  <Link to="/store/" className="link" activeClassName="activeNav"> About </Link>
                </li>
                <li>
                  <Link to="/cart/" className="link" activeClassName="activeNav"> Projects </Link>
                </li>
                <li>
                  <Link to="/contact/" className="link" activeClassName="activeNav">  Contact </Link>
                </li>
                <li><a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                <li><a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /> </a></li>
                <li><a href="https://www.facebook.com/ionut.prilipceanu93/" target="_blank" rel="noreferrer" className="logoFacebook"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
              </ul>
            </div>
          :
          <div className="nav-barBack ">
            <ul className="nav-bar">
              <li>
                <Link to="/" className="link" activeClassName="activeNav">  Home </Link>
              </li>
              <li>
                <Link to="/store/" className="link" activeClassName="activeNav">  About </Link>
              </li> 
              <li>
                <Link to="/cart/" className="link" activeClassName="activeNav">  Projects </Link>
              </li>
              <li>
                <Link to="/contact/" className="link" activeClassName="activeNav">  Contact </Link>
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
              <Link to="/" className="link" activeClassName="activeNav">  Home </Link>
            </li>
            <li>
              <Link to="/store/" className="link" activeClassName="activeNav">  About </Link>
            </li> 
            <li>
              <Link to="/cart/" className="link" activeClassName="activeNav">  Projects </Link>
            </li>
            <li>
              <Link to="/contact/" className="link" activeClassName="activeNav">  Contact</Link>
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
                <Link to="/" className="link" activeClassName="activeNav"> Home </Link>
              </li>
              <li>
                <Link to="/store/" className="link" activeClassName="activeNav"> About </Link>
              </li> 
              <li>
                <Link to="/cart/" className="link" activeClassName="activeNav"> Projects </Link>
              </li>
              <li>
                <Link to="/contact/" className="link" activeClassName="activeNav"> Contact </Link>
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