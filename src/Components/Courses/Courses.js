import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="mb-4">Most Popular</h2>
        <Row xs={1} md={3} className="g-3">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
