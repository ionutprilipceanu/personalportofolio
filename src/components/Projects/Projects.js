import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button} from 'react-bootstrap'
import "./Projects.css"
import Fade from "react-reveal/Fade"
import photography_page from "..//About/images/photography_page.jpg"
import handcrafted_leader from "..//About/images/handcrafted_leather.jpg"
import filter_page from "..//About/images/filter_page.jpg"



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
                <Card.Img variant="top" src={photography_page} alt="photographyPage"/>
                <Card.Body>
                  <Card.Title>Photography</Card.Title>
                  <Card.Text>
                    HTML5, CSS3, JAVASCRIPT, jQuery
                  </Card.Text>
                  <Button variant="primary" className="send_Btn" href="https://ionut-prilipceanu.com/" target="_blank" >Let' check</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={filter_page} alt="filterPage" /> */}

                <div>
                <img src={photography_page} alt="logo"></img>
                </div>

                <Card.Body>
                  <Card.Title>Filter App</Card.Title>
                  <Card.Text>
                    React JS, CSS3, Bootstrap
                  </Card.Text>
                  <Button variant="primary" className="send_Btn" href="https://photogallery-exercises.netlify.app/" target="_blank" >Let's check</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={handcrafted_leader} alt="handcraftedLeader" />
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
