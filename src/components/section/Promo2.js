import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import CustomButton from "../button/CustomButton";

const Promo2 = () => {
  return (
    <>
      <Container className="m-top">
        <Row className="align-items-center">
          <Col>
            <img
              src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Want &amp; Advice-06.png"
              class="img-fluid"
              alt=""
            />
          </Col>
          <Col md={6} sm={6} xs={6}>
            {/* <div class="pr-0 pr-sm-5"> */}
            <h2 className="font-weight-bold text-danger mb-4">
              Bank from{" "}
              <span className="text-success font-weight-bold">everywhere</span>
            </h2>
            <h5 className="font-weight-500 text-d-gray mb-4">
              Change the way you bank, with nBank.
            </h5>
            <Row className="app-service-grid ">
              <Col md={3} sm={3} xs={3} className="service-block active">
                <img
                  alt=""
                  src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Vector.png"
                />
                Mobile
              </Col>
              <Col md={3} sm={3} xs={3} className="service-block ">
                <img
                  alt=""
                  src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Vector-1.png"
                />
                Internet
              </Col>
              <Col md={3} sm={3} xs={3} class="service-block ">
                <img
                  alt=""
                  src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/Bank.png"
                />
                Branches
              </Col>
              <Col class="service-block " md={3} sm={3} xs={3}>
                <img
                  alt=""
                  src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Group.png"
                />
                ATM
              </Col>
              {/* Other service-block components */}
              <div className="service_icon-arrow"></div>
            </Row>
            <div className="d-flex mx-5 flex-column flex-sm-row flex-wrap justify-content-center m-top">
              <Row className="g-2">
                <Col md={12} sm={12} xs={12}>
                  <Button variant="success">
                    Send to Mobile Number{" "}
                    <i
                      style={{ marginLeft: "10px;" }}
                      class="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Button>
                </Col>
                <Col md={12} sm={12} xs={12}>
                  <CustomButton
                    variant="outline-success"
                    label="More Info"
                    onClickRedirect="/individual/abc"
                  />
                </Col>
              </Row>
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Promo2;
