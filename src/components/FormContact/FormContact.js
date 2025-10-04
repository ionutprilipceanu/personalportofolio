import React, { useState } from "react"
import "./Form_contact.css"
import { Form, Col, Button, Card } from "react-bootstrap"
import Reveal from "../Reveal"

const ContactField = ({ id, label, type = "text", name, placeholder, required = true, as, rows }) => (
  <Form.Group as={Col} className="groupField">
    <Form.Label htmlFor={id}>{label}</Form.Label>
    <Form.Control
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      as={as}
      rows={rows}
    />
  </Form.Group>
)

const ContactForm = () => (
  <Form
    className="formBody"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    name="last-form-contact-up"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="last-form-contact-up" />

    <Reveal>
      <div className="titlu">
        <h3>Contact form</h3>
      </div>

      <ContactField id="name-input" label="Name" name="name" placeholder="Enter name" />
      <ContactField id="phone-input" label="Phone" name="phone" placeholder="Enter phone number" />
      <ContactField id="address-input" label="Email" type="email" name="address" placeholder="Enter email address" />

      <ContactField
        id="text-area"
        label="Enter your message"
        name="comment"
        as="textarea"
        rows={5}
        placeholder="Write your message..."
      />

      <Button variant="primary" type="submit" className="send_Btn">
        Submit
      </Button>
    </Reveal>
  </Form>
)

const ContactInfo = () => {
  const [showText, setShowText] = useState(true)

  return (
    <div className="contactInfoForm">
      <Reveal>
        <div className={showText ? "titlu" : "titluShow"}>
          <h3>Contact info</h3>
          {!showText && (
            <div className="contactName">
              <p>
                Name: Ionuț Prilipceanu <br />
                Phone number: (+40) 751 684 142 <br />
                E-mail: prilipceanu.ionut@gmail.com
              </p>
            </div>
          )}
        </div>
      </Reveal>

      <Button variant="primary" className="send_Btn" onClick={() => setShowText(!showText)}>
        {showText ? "More info" : "Less info"}
      </Button>
    </div>
  )
}

const FormContact = () => (
  <div id="contact">
    <Card.Title className="abouttitleForm">
      <span className="border-bottom">Contact</span>
    </Card.Title>

    <div className="continutForm">
      <ContactForm />
      <ContactInfo />
    </div>
  </div>
)

export default FormContact
