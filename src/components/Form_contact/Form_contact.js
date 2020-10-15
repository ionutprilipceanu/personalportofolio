import React, {Component} from 'react'
import './Form_contact.css'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import { Card } from 'react-bootstrap'
// import favicon from '..//Form_contact/'

class Form_contact extends Component {
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

    <div>
      <Card.Title className="abouttitleForm"><span className="border-bottom">Contact</span> </Card.Title>
      <div className="continutForm">
      <Form 
      className="formBody"
      method="post" 
      netlify-honeypot="bot-field" 
      data-netlify="true" 
      name="last-form-contact-up" 
      // action="/thank-you" //mesaj de informare dupa submit
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="last-form-contact-up"  />
      <Fade left cascade>
        <div className="titlu"><h3>Contact form</h3></div>
        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label htmlFor="name" >Name</Form.Label>
            <Form.Control 
            id="name-input" 
            type="text" 
            name="name" 
            placeholder="Enter name"
            required onChange={this.handInput}
            />
          </Form.Group>

            {/* <Form.Group as={Col} >
            <Form.Label htmlFor="lastname" >Last Name</Form.Label>
            <Form.Control 
            id="lastname-input" 
            type="text" 
            name="name" 
            placeholder="Enter last name" 
            required onChange={this.handInput}
            />
          </Form.Group>  */}
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="phone" >Phone</Form.Label>
            <Form.Control 
            placeholder="Enter phone number" 
            id="phone-input" 
            type="text" 
            name="phone" 
            required onChange={this.handInput}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="email" >Email</Form.Label>
            <Form.Control 
            id="address-input" 
            type="email" 
            name="address" 
            placeholder="Enter email address" 
            required onChange={this.handInput}
            />
          </Form.Group>
        </Form.Row>
            
        <Form.Group>
          <Form.Label>Enter your message</Form.Label>
          <Form.Control as="textarea" rows="5" columns="2"
          id="text-area" 
          type="text" 
          name="comment" 
          required onChange={this.handInput}  
          />
          
        </Form.Group>   

        <Button variant="primary" type="submit" className="send_Btn">
          Submit
        </Button>
        </Fade>
      </Form>
      
    
      <div className="contactInfoForm">
        {this.state.showText ?
        <Fade top cascade>
        <div className="titlu">
          <h3>Contact info</h3>
        </div>
        </Fade>
      :
      <Fade bottom cascade>
        <div className="titluShow">
          <h3>Contact info</h3>

          <div className="contactName">
          
          <p>
              Name: Ionuț Prilipceanu <br/>
              Phone number: (+40) 751 684 142 <br/>
              E-mail: prilipceanu.ionut@gmail.com
          </p>
          </div>
        </div>
        </Fade>
        }
        
        
        <Button variant="primary" className="send_Btn" onClick={() => this.butonulMeu()}> {this.state.showText ?
          'More info' : 'Less info' }
        </Button>
      </div>
    </div>
    </div>
    
  ) 
  }
}

export default Form_contact
