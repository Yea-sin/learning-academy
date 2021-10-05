import React from "react";
import "./Header.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../utilities/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <NavLink to="/home">
            <img
              src={img}
              style={{ width: "120px", borderRadius: "30px" }}
              alt=""
            />
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <NavLink to="/home" className="navs" activeClassName="selected">
                Home
              </NavLink>
              <NavLink
                to="/courses"
                className="navs"
                activeClassName="selected">
                Courses
              </NavLink>
              <NavLink
                to="/instructors"
                className="navs"
                activeClassName="selected">
                Instrustors
              </NavLink>
              <NavLink to="/about" className="navs" activeClassName="selected">
                About
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Something.."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
