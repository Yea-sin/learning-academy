import React from "react";
import { Container } from "react-bootstrap";
import invest from "../../utilities/invest.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="d-flex justify-content-center">
            <img
              style={{ borderRadius: "35px" }}
              className="img-fluid d-block"
              src={invest}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
