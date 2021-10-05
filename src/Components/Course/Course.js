import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Course = (props) => {
  const { name, image, description, fee } = props.course;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 120)}</Card.Text>
            <h4>${fee}</h4>
            <Button variant="primary">Enroll Now</Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;
