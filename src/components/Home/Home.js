import React, {Component} from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import favicon from '..//..//..//static/images/favicon.png'
import homeimage from "..//Home/images/home.jpg"

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
            <Button className="btn-start">
              Get started
            </Button>
            <Button className="btn-resume"><a href="https://drive.google.com/file/d/13S3nMbk6jCNDppwiHHSQYSdGdlf__ezt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get resume</a>
              
            </Button>
          </div>
        </div>
      </Fade>
      
      
    
      
    </div>
  ) 
  }
}

export default Home
