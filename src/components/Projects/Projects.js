import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button} from 'react-bootstrap'
import "./Projects.css"
import Fade from "react-reveal/Fade"
import photographyPage from "..//Projects/images/ip.jpg"
import handcraftedLeader from "..//Projects/images/mm.jpg"
import filterPage from "..//Projects/images/pg.jpg"



export class Projects extends Component {
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
        <Fade left cascade>
          <Card className="about_body">
            <Card.Body>
              <Card.Title className="abouttitle"><span className="border-bottom">Projects</span> </Card.Title>
              <div className="aboutContent">

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photographyPage} />
                <Card.Body>
                  <Card.Title>Photography</Card.Title>
                  <Card.Text>
                    HTML5, CSS3, JAVASCRIPT, jQuery
                  </Card.Text>
                  <Button variant="primary" className="send_Btn" href="https://ionut-prilipceanu.com/" target="_blank" >Let' check</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={filterPage} />
                <Card.Body>
                  <Card.Title>Filter App</Card.Title>
                  <Card.Text>
                    React JS, CSS3, Bootstrap
                  </Card.Text>
                  <Button variant="primary" className="send_Btn" href="https://photogallery-exercises.netlify.app/" target="_blank" >Let's check</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={handcraftedLeader} />
                <Card.Body>
                  <Card.Title>Handcrafted leather</Card.Title>
                  <Card.Text>
                    React JS, JAVASCRIPT, CSS3
                  </Card.Text>
                  <Button variant="primary" className="send_Btn" href="https://handcrafted-leather.netlify.app/" target="_blank" >Let's check</Button>
                </Card.Body>
              </Card>
                
              </div>

            </Card.Body>
          </Card>
        </Fade>
      </div>
    )
  }
}

export default Projects
