import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from "react-bootstrap"
import "./About.css"
import profilePhoto from "..//About/images/profilePhoto.jpg"
import Reveal from "..//Reveal"

const About = () => {
  return (
    <div className="containerBodyCarder" id="about">
      <Reveal>
        <Card className="about_body">
          <Card.Body>
            <Card.Title className="abouttitle">
              <span className="border-bottom">About</span>{" "}
            </Card.Title>
            <div className="aboutContent">
              <div className="profilePhoto">
                <img src={profilePhoto} alt="logo"></img>
              </div>

              <div className="aboutSection">
                <Card.Subtitle className="cardSubtitleSection">
                  Hello, I’m Ionuț. Nice to meet you!
                </Card.Subtitle>
                <Card.Text className="aboutText">
                  Enthusiastic and creative software engineer with deep interest
                  in user experience and user interface. Motivation and
                  involvement helped the team to find a way to make the app much
                  more user-friendly for the end user, that helped the client
                  achieve their purposes I am eager to develop myself by
                  exploring and learning new technologies, this helps to stay
                  focus on with fresh perspective for future challenges.
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Reveal>

      <Reveal>
        <div className="skillsContainer">
          <Card.Title className="cardSkills">Skills</Card.Title>
          <Card className="card-final">
            <Card className="carder_body">
              <Card.Body>
                <Card.Subtitle className="cardSubtitle">
                  Technologies
                </Card.Subtitle>
                <div className="bottomLine"></div>
                <Card.Text className="cardText">
                  <li>Javascript</li>
                  <li>TypeScript</li>
                  <li>CSS</li>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="carder_body">
              <Card.Body>
                <Card.Subtitle className="cardSubtitle">
                  Library and framework
                </Card.Subtitle>
                <div className="bottomLine"></div>
                <Card.Text className="cardText">
                  <li>React</li>
                  <li>Angular</li>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="carder_body">
              <Card.Body>
                <Card.Subtitle className="cardSubtitle">
                  Tools and others
                </Card.Subtitle>
                <div className="bottomLine"></div>
                <Card.Text className="cardText">
                  <li>Visual Studio Code</li>
                  <li>Package managers - npm</li>
                  <li>Version control systems - Git</li>
                  <li>MongoDB</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
        </div>
      </Reveal>
    </div>
  )
}

export default About
