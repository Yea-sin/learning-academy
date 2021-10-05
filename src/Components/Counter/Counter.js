import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="my-3 bg-secondary p-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={3}>
            <div className="counter-text">
              <div>
                <h1 className="text-info">100</h1>
              </div>
              <div>
                <h2>Succes Stories</h2>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="counter-text">
              <div>
                <h1 className="text-info">50</h1>
              </div>
              <div>
                <h2>Trusted Tutors</h2>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="counter-text">
              <div>
                <h1 className="text-info">150</h1>
              </div>
              <div>
                <h2>Sheduled Events</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
