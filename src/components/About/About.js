import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from "react-bootstrap"
import "./About.css"
import profilePhoto from "../About/images/profilePhoto.jpg"
import Reveal from "../Reveal"

const skillsData = [
  {
    title: "Technologies",
    items: ["Javascript", "TypeScript", "CSS"],
  },
  {
    title: "Library and framework",
    items: ["React", "Angular"],
  },
  {
    title: "Tools and others",
    items: [
      "Visual Studio Code",
      "Package managers - npm",
      "Version control systems - Git",
      "MongoDB",
    ],
  },
]

const SkillCard = ({ title, items }) => (
  <Card className="carder_body">
    <Card.Body>
      <Card.Subtitle className="cardSubtitle">{title}</Card.Subtitle>
      <div className="bottomLine"></div>
      <Card.Text as="ul" className="cardText">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Card.Text>
    </Card.Body>
  </Card>
)

const About = () => {
  return (
    <div className="containerBodyCarder" id="about">
      <Reveal>
        <Card className="about_body">
          <Card.Body>
            <Card.Title className="abouttitle">
              <span className="border-bottom">About</span>
            </Card.Title>
            <div className="aboutContent">
              <div className="profilePhoto">
                <img src={profilePhoto} alt="Profile" />
              </div>

              <div className="aboutSection">
                <Card.Subtitle className="cardSubtitleSection">
                  Hello, I’m Ionuț. Nice to meet you!
                </Card.Subtitle>
                <Card.Text className="aboutText">
                  Enthusiastic and creative software engineer with deep interest
                  in user experience and user interface. Motivation and
                  involvement helped the team to make the app much more
                  user-friendly, which helped the client achieve their goals.  
                  I am eager to grow by exploring and learning new technologies,
                  keeping a fresh perspective for future challenges.
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
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                items={skill.items}
              />
            ))}
          </Card>
        </div>
      </Reveal>
    </div>
  )
}

export default About
