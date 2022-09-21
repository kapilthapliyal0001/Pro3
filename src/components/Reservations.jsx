/** @format */

import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Reservations extends Component {
  state = {
    reservations: [], //empty state
  };

  componentDidMount = async () => {
    // component did mount is fired whenever there
    // this place is perfect for the fetches
    const response = await fetch("http://localhost:3001/reservations/");
    let data = await response.json();
    console.log(data);
    this.setState({
      reservations: data,
    });
  };

  render() {
    // render is going to be executed whenever there is a change in the state or the props
    // never set state in the render
    console.log("print from the render");
    return (
      <>
        {/* This is a react fragment to wrap things up */}
        <ListGroup>
          {this.state.reservations.length === 0 ? (
            <h3>There is no such reservations </h3>
          ) : (
            this.state.reservations.map((res) => (
              <ListGroupItem>{res.name}</ListGroupItem>
            ))
          )}
        </ListGroup>
      </>
    );
  }
}
