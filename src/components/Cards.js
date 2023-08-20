import React from "react";
import "../card.css";
const Cards = ({ img, title }) => {
  return (
    <>
      {/* <div className="row">
        <div className="col"> */}
      <div class="card cardcc mb-3 shadow-lg p-3 mb-5 bg-white rounded mt-3 container">
        <div className="category-wrapper-item container">
          <div class="row g-0">
            <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 ">
              <img src={img} class="img-fluid  mx-auto" alt="...TO ADD" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-6 col-xs-6 d-flex align-items-center">
              {/* <div class="card-body"> */}
              <h5 class="card-title">{title}</h5>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default Cards;
