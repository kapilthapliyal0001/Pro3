/** @format */

import { Col, Row, Container, Carousel } from "react-bootstrap";
import dishes from "../data/menu.json";

const Home = () => (
  <Container>
    <Row className="justify-content-center mt-2">
      <Col xs={12} md={6}>
        <Carousel>
          {dishes.map((dish) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.americanoceans.org/wp-content/uploads/2021/08/Sea-vs-Ocean-.jpg"
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

export default Home;
