import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import DisplayCourses from "../DisplayCourses/DisplayCourses";

const Container = () => {
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <DisplayCourses></DisplayCourses>
    </div>
  );
};

export default Container;
