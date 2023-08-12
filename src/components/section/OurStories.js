import React from "react";
import { Col, Row } from "react-bootstrap";

const OurStories = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <div class="pr-0 pr-sm-5">
            <h4 class="font-weight-bold text-success">Our Stories</h4>
            <h2 class="text-danger">
              Our contribution{" "}
              <span class="font-weight-bold text-success font-weight-bold ">
                towards the community
              </span>
            </h2>
            <h5 class="font-weight-bold text-purple mb-5"></h5>
            <button class="btn  btn-gradient--solid btn--medium icon ">
              Read Our Stories
            </button>
          </div>
        </Col>
        <Col>
          <img
            src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Third-Section-remake-1.png"
            class="img-fluid w-100"
            alt=""
          />
        </Col>
      </Row>
    </>
  );
};

export default OurStories;
