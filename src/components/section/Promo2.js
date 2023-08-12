import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Promo2 = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col md={6} className="position-relative">
          <div className="position-relative m-3">
            <figure className="m-0">
              <img
                alt="OOPS"
                src='"https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/nBank%20Banner.png"'
                class="img-fluid"
              />
            </figure>
          </div>
        </Col>
        <Col md={6}>
          <h2 className="font-weight-bold text-danger mb-4">
            Bank from{" "}
            <span className="text-success font-weight-bold">everywhere</span>
          </h2>
          <h5 className="font-weight-500 text-d-gray mb-4">
            Change the way you bank, with nBank.
          </h5>
          <Row className="app-service-grid">
            <Col className="service-block active">
              <img
                alt=""
                src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Vector.png"
              />
              Mobile
            </Col>
            <Col className="service-block ">
              <img
                alt=""
                src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Vector-1.png"
              />
              Internet
            </Col>
            <Col class="service-block ">
              <img
                alt=""
                src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/Bank.png"
              />
              Branches
            </Col>
            <Col class="service-block ">
              <img
                alt=""
                src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Group.png"
              />
              ATM
            </Col>
            {/* Other service-block components */}
            <div className="service_icon-arrow"></div>
          </Row>
          <div className="d-flex flex-column flex-sm-row flex-wrap">
            <Button className="btn mb-2 mr-2 btn-gradient--solid btn--medium icon">
              Send to Mobile Number
            </Button>
            <Button className="btn mb-2 btn-success--outline btn--medium icon">
              More Info
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Promo2;