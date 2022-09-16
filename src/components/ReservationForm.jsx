/** @format */

import React, { Component } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

class ReservationForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Contact number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of persons</Form.Label>
          <Form.Control as="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">Table of 4</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Do you smoke?" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date & Time</Form.Label>
          <Form.Control type="datetime-local" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ReservationForm;
