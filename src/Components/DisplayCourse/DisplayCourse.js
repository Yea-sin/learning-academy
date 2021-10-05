import React from "react";
import { Col, Card } from "react-bootstrap";

const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 120)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
