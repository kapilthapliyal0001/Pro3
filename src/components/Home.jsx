/** @format */

import { Col, Row, Container, Carousel } from "react-bootstrap";
import dishes from "../data/menu.json";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Welcome to the Kapil Real Restaurant Buissness</h1>
        <Row className="justify-content-center mt-2">
          <Col xs={12} md={6}>
            <Carousel>
              {/* {map} */}
              {dishes.map((dish) => (
                <Carousel.Item key={dish.id}>
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
      </Container>
    );
  }
}
export default Home;
