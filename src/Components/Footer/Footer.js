import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer p-5 bg-dark text-light">
        <Container>
          <div className="d-flex justify-content-between">
            <div>&copy;all rights are reserved</div>
            <div>
              <NavLink to="/facebook">
                <i className="bi bi-facebook ps-3 fs-3"></i>
              </NavLink>
              <NavLink to="/instagram">
                <i className="bi bi-instagram ps-3 fs-3"></i>
              </NavLink>
              <NavLink to="/twitter">
                <i className="bi bi-twitter ps-3 fs-3"></i>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
