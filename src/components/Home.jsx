/** @format */

import { Col, Row, Container, Carousel } from "react-bootstrap";
import dishes from "../data/menu.json";
import { Component } from "react";
import { ListGroup } from "react-bootstrap";

// Importing component
import Reservations from "./Reservations";

class Home extends Component {
  state = {
    selected: null,
  };
  render() {
    return (
      <Container>
        <h1>Welcome to the Kapil Real Restaurant Buissness</h1>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <Carousel>
              {/* {map} */}
              {dishes.map((dish) => (
                <Carousel.Item
                  key={dish.id}
                  onClick={() =>
                    this.setState({
                      selected: dish,
                    })
                  }
                >
                  <img
                    className="d-block w-100"
                    src={dish.image}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            List group is here
            <ListGroup>
              {this.state.selected ? (
                this.state.selected.comments.map((c) => (
                  <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                ))
              ) : (
                <h1>No comments</h1>
              )}
            </ListGroup>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <Reservations />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
