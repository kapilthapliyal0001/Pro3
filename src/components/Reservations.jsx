/** @format */

import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

// importing component
import Loader from "./Loader";
import Error from "./Error";
export default class Reservations extends Component {
  state = {
    reservations: [], //empty state
    isLoading: true,
    isError: false,
  };

  componentDidMount = async () => {
    // component did mount is fired whenever there
    // this place is perfect for the fetches

    try {
      const response = await fetch("http://localhost:3001/reservations/");
      let data = await response.json();
      console.log(data);
      this.setState({
        reservations: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error, " :following is the error");
      this.setState({
        ...this.state,
        isLoading: false,
        isError: true,
      });
    }
  };

  render() {
    // render is going to be executed whenever there is a change in the state or the props
    // never set state in the render
    console.log("print from the render");
    return (
      <>
        {/* and operator need to be true for both the conditions and the jsx is always true so, the first statement is the cond. */}
        {this.state.isLoading && <Loader />}
        {this.state.isError && <Error />}

        {this.state.reservations.length === 0 &&
        this.state.isLoading === false &&
        this.state.isError === false ? (
          <p>There is no reservations </p>
        ) : (
          <ListGroup>
            {this.state.reservations.map((res) => (
              <ListGroup.Item>{res.name}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </>
    );
  }
}
