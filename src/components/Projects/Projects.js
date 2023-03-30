import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap"
import "./Projects.css"
import Fade from "react-reveal/Fade"
import { items } from "./items"

export class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size: "",
      sort: "",
    }
  }

  render() {
    return (
      <div className="containerBodyCarder" id="projects">
        <Fade bottom cascade>
          <Card className="about_body">
            <Card.Body>
              <Card.Title className="abouttitle">
                <span className="border-bottom">Projects</span>{" "}
              </Card.Title>
              <div className="aboutContentProjects">
                <div className="firstContainer">
                  {items?.map(item => {
                    return (
                      <div key={item.key}>
                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={item.src} alt="img" />
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.Technologies}</Card.Text>
                            <Button
                              variant="primary"
                              className="send_Btn"
                              href={item.link}
                              target="_blank"
                            >
                              Let's check
                            </Button>
                          </Card.Body>{" "}
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Fade>
      </div>
    )
  }
}

export default Projects
