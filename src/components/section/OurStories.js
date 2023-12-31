import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton from "../button/CustomButton";

const OurStories = () => {
  return (
    <>
      <Container className="m-top">
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
              <CustomButton
                variant="success"
                label="Read Our Stories"
                onClickRedirect="/individual/abc"
              />
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
      </Container>
    </>
  );
};

export default OurStories;
