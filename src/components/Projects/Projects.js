import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap"
import "./Projects.css"
import Reveal from "../Reveal"
import { items } from "./items"

const ProjectCard = ({ project }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={project.src} alt={project.title} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>{project.Technologies}</Card.Text>
      <Button variant="primary" className="send_Btn" href={project.link} target="_blank">
        Let's check
      </Button>
    </Card.Body>
  </Card>
)

const Projects = () => (
  <div className="containerBodyCarder" id="projects">
    <Reveal>
      <Card className="about_body">
        <Card.Body>
          <Card.Title className="abouttitle">
            <span className="border-bottom">Projects</span>
          </Card.Title>
          <div className="aboutContentProjects">
            <div className="firstContainer">
              {items?.map((project) => (
                <ProjectCard key={project.key} project={project} />
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Reveal>
  </div>
)

export default Projects
