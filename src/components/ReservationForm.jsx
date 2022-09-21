/** @format */

import React, { Component } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "Kapil",
      phone: "",
      persons: 1,
      smoking: false,
      date_time: "",
      specialRequests: "",
    },
  };

  submitReservation = async (e) => {
    e.preventDefault();
    console.log("I am about to send the reservation");
    console.log(this.state.reservation);

    try {
      let res = await fetch("http://localhost:3001/reservations/", {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res.ok);

      if (res.ok) {
        alert("Reservation saved");
        this.setState({
          reservation: {
            reservation: {
              name: "",
              phone: "",
              persons: 1,
              smoking: false,
              date_time: "",
              specialRequests: "",
            },
          },
        });
      } else {
        alert("We have a problem");
      }
    } catch (error) {
      console.log(error);
    }
    // fetch("https://striveschool.herokuapp.com/api/reservation")
    //   .then((res) => console.log(res.ok))
    //   .catch((err) => console.log(err));
  };

  inputChange = (e) => {
    let id = e.target.id;

    this.setState({
      reservation: {
        ...this.state.reservation,
        [id]: id === "smoking" ? e.target.checked : e.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <h2>Reservation Forum</h2>
        <Form onSubmit={(e) => this.submitReservation(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Name"
              value={this.state.reservation.name}
              onChange={(e) =>
                this.setState({
                  reservation: {
                    ...this.state.reservation,
                    name: e.target.value,
                  },
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter Contact phone"
              value={this.state.reservation.phone}
              onChange={(e) => {
                this.setState({
                  reservation: {
                    ...this.state.reservation,
                    phone: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of persons</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => this.inputChange(e)}
              id="persons"
              value={this.state.persons}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">Table of 4</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Do you smoke?"
              checked={this.state.reservation.smoking}
              id="smoking"
              onChange={(e) => this.inputChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={this.state.reservation.date_time}
              onChange={(e) =>
                this.setState({
                  reservation: {
                    ...this.state.reservation,
                    date_time: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.reservation.specialRequests}
              id="specialRequests"
              onChange={this.inputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default ReservationForm;
