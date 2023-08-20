import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../button/CustomButton";

const Promo = () => {
  return (
    <>
      <Container className="m-top">
        <Row className="align-items-center">
          <Col>
            <div class="pr-0 pr-sm-5">
              {/* <h4 class="font-weight-bold text-success">Our Stories</h4> */}
              <h2 class="text-danger">
                Want advice{" "}
                <span class="font-weight-bold text-success font-weight-bold ">
                  {" "}
                  or know what you are looking for?
                </span>
              </h2>
              <h5 class="font-weight-bold text-purple mb-5"></h5>
              <div class="d-flex flex-column flex-sm-row justify-content-center  ">
                <div className="row g-2">
                  <div className="col">
                    <CustomButton
                      variant="success"
                      label="Schedule An Appointment"
                      onClickRedirect="/individual/abc"
                    />
                  </div>
                  <div className="col">
                    <CustomButton
                      variant="outline-success"
                      label="View FAQ's"
                      onClickRedirect="/individual/abc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <img
              src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Want &amp; Advice-06.png"
              class="img-fluid"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Promo;
