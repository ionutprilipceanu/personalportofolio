import React, { Component } from "react"
import "./Form_contact.css"
import { Form } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import Reveal from "..//Reveal"

export class FormContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showText: true,
    }
  }

  butonulMeu() {
    this.setState({
      showText: !this.state.showText,
    })
  }

  render() {
    return (
      <div id="contact">
        <Card.Title className="abouttitleForm">
          <span className="border-bottom">Contact</span>{" "}
        </Card.Title>
        <div className="continutForm">
          <Form
            className="formBody"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="last-form-contact-up"
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="form-name"
              value="last-form-contact-up"
            />
            <Reveal>
              <div className="titlu">
                <h3>Contact form</h3>
              </div>
              <Form.Group as={Col} className="groupField">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  id="name-input"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  required
                  onChange={this.handInput}
                />
              </Form.Group>

              <Form.Group as={Col} className="groupField">
                <Form.Label htmlFor="phone">Phone</Form.Label>
                <Form.Control
                  placeholder="Enter phone number"
                  id="phone-input"
                  type="text"
                  name="phone"
                  required
                  onChange={this.handInput}
                />
              </Form.Group>

              <Form.Group as={Col} className="groupField">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="address-input"
                  type="email"
                  name="address"
                  placeholder="Enter email address"
                  required
                  onChange={this.handInput}
                />
              </Form.Group>

              <Form.Group className="groupField">
                <Form.Label>Enter your message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  columns="2"
                  id="text-area"
                  type="text"
                  name="comment"
                  required
                  onChange={this.handInput}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="send_Btn">
                Submit
              </Button>
            </Reveal>
          </Form>

          <div className="contactInfoForm">
            {this.state.showText ? (
              <Reveal>
                <div className="titlu">
                  <h3>Contact info</h3>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <div className="titluShow">
                  <h3>Contact info</h3>

                  <div className="contactName">
                    <p>
                      Name: Ionuț Prilipceanu <br />
                      Phone number: (+40) 751 684 142 <br />
                      E-mail: prilipceanu.ionut@gmail.com
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            <Button
              variant="primary"
              className="send_Btn"
              onClick={() => this.butonulMeu()}
            >
              {" "}
              {this.state.showText ? "More info" : "Less info"}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormContact
