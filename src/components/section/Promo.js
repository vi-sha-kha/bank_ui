import React from "react";
import { Button } from "react-bootstrap";

const Promo = () => {
  return (
    <>
      <div class="container">
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
                  <Button variant="success">Schedule an Appointment</Button>
                </div>
                <div className="col">
                  <Button variant="outline-success">View FAQs</Button>
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
      </div>
    </>
  );
};

export default Promo;
