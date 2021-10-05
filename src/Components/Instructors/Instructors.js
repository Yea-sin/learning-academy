import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Instructor from "../Instructor/Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setInstructors(data.results));
  }, []);
  return (
    <div>
      {instructors.map((instructor) => (
        <Instructor key={instructor.id} instructor={instructor}></Instructor>
      ))}
    </div>
  );
};

export default Instructors;
