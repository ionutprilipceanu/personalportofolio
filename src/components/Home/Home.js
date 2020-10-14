import React, {Component} from 'react'
import './Home.css'
import Fade from "react-reveal/Fade"
import favicon from '..//..//..//static/images/favicon.png'
import homeimage from "..//Home/images/home.jpg"
import Link from 'gatsby-link'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showText: true
    }
  }
  
  butonulMeu() {
    this.setState({
      showText: !this.state.showText
    })
  }
  
  render() {
  return (
    <div className="Intro">
      <div>
        <img src={homeimage}
          alt="background_logo"
        />
      </div>
      <Fade left cascade>
        <div className="contactInfo">
          <Fade bottom cascade>
            <div className="titluShow">
              <h1>Personal portofolio</h1>

              <div className="contactName">
                <img src={favicon}  alt="logo" className="contactLogo"/>
                <p>
                  Ionuț Prilipceanu <br/>
                  (+40) 751 684 142 <br/>
                  prilipceanu.ionut@gmail.com
                </p>
              </div>
            </div>
          </Fade>
          <div className="btn-all">
            <Link to="/cart/" className="btn-start">
              Get started
            </Link>
            
              <a className="btn-resume" href="https://drive.google.com/file/d/13S3nMbk6jCNDppwiHHSQYSdGdlf__ezt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get resume</a>
            
          </div>
        </div>
      </Fade>
      
      
    
      
    </div>
  ) 
  }
}

export default Home
