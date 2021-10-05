import React from "react";
import { Button } from "react-bootstrap";
import "./Instructor.css";
const Instructor = (props) => {
  const { name, picture, email } = props.instructor;
  const handleInstructor = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className="text-center instructors">
        <div>
          <img src={picture.large} alt="" />
        </div>
        <h2>{name.first}</h2>
        <h5>Email : {email}</h5>
        <div>
          <Button onClick={handleInstructor}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
