import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Promo = () => {
  return (
    <>
      {/* <div class="container">
        <div class="row align-items-center pb-3 pb-md-0">
          <div class="col-md-7 order-1 order-md-0">
            <h2 class="font-weight-bold text-danger mb-3">
              Want advice{" "}
              <span class="text-success font-weight-bold ">
                {" "}
                or know what you are looking for?
              </span>{" "}
            </h2>
            <h5 class=" text-d-gray mb-3">
              Answer a few questions and we will help you plan your finances.
            </h5>
            <div class="d-flex flex-column flex-sm-row justify-content-center  ">
              <div className="row g-2">
                <div className="col">
                  <Button variant="success">
                    Schedule an Appointment{" "}
                    <i
                      style={{ marginLeft: "10px;" }}
                      class="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Button>
                </div>
                <div className="col">
                  <Button variant="outline-success">
                    View FAQs{" "}
                    <i
                      style={{ marginLeft: "10px;" }}
                      class="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 order-0 order-md-1">
            <img
              alt=""
              src="https://siteadmin.nabilbank.com/assets/backend/uploads/home/Individual/Want &amp; Advice-06.png"
              class="img-fluid"
            />
          </div>
        </div>
      </div> */}

      <Container>
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
                    <Button variant="success">
                      Schedule an Appointment{" "}
                      <i
                        style={{ marginLeft: "10px;" }}
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </Button>
                  </div>
                  <div className="col">
                    <Button variant="outline-success">
                      View FAQs{" "}
                      <i
                        style={{ marginLeft: "10px;" }}
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                    </Button>
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
