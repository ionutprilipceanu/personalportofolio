import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import "./About.css"
import Fade from "react-reveal/Fade"
import profilePhoto from "..//About/images/profilePhoto.jpg"




export class About extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      size:"",
      sort:"",
    }
  }

  render() {
    return (
      <div className="containerBodyCarder">
        <Fade>
          <Card className="about_body">
            <Card.Body>
              <Card.Title className="abouttitle"><span className="border-bottom">About</span> </Card.Title>
              <div>

                <div className="profilePhoto">
                  <img src={profilePhoto} alt="logo"></img>
                </div>
                
                <div className="aboutSection">
                <Card.Subtitle className="cardSubtitle">Hello, I’m Ionuț. Nice to meet you!</Card.Subtitle>
                <Card.Text className="aboutText">
                I want to make some changes in my career, so the IT field would be a real challenge for me. It is known that teamwork, communication and transparency are the key for a successful team, so these qualities I want to highlight to make a proper contribution to the development of departament and also to the company. Down below you can find the skills that I gained in this journey and I case is it fits your requirements, I look forward to seeing you in an interview.
                </Card.Text>
                </div>
                
              </div>

            </Card.Body>
          </Card>
        </Fade>

        <Fade>

        <Card.Title className="cardSubtitle">Skills</Card.Title>
         <Card className="card-final">
        
          <Card className="carder_body">
            <Card.Body>
              <Card.Subtitle className="cardSubtitle">Technologies</Card.Subtitle>
              <Card.Text className="cardText">
              
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JAVASCRIPT</li>
                <li>BOOTSTRAP</li>
              
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="carder_body">
            <Card.Body>
              <Card.Subtitle className="cardSubtitle">Knowledge</Card.Subtitle>
              <Card.Text className="cardText">
              
                <li>REACT JS</li>
                <li>JSON</li>
                <li>AJAX</li>
              
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="carder_body">
            <Card.Body>
              <Card.Subtitle className="cardSubtitle">Tools and others</Card.Subtitle>
              <Card.Text className="cardText">
              
                <li>Adobe Photoshop</li>
                <li>Visual Studio Code</li>
                <li>GIT</li>
                <li>GitHub</li>
              
              </Card.Text>
            </Card.Body>

          </Card>
          </Card> 
        </Fade>
      </div>
    )
  }
}

export default About
