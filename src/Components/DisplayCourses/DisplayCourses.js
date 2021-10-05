import { React, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Service from "../DisplayCourse/DisplayCourse";
import "./DisplayCourses.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./displayData.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center mb-3 course-heading">Our Courses</h1>
        <Row xs={1} md={3} className="g-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
        <div>
          <NavLink to="/courses" className="link">
            See More <i className="bi bi-arrow-right-circle-fill"></i>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Services;
