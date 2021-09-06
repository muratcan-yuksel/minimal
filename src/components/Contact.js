import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <Form
        action="https://formsubmit.co/0b5b366a4b7efb1e2c10dd13c075d713"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://muratcan-yuksel.github.io/portfolio-1/thanks"
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" name="textarea" rows={3} />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
