import React from "react";
import "../card.css";
const Cards = ({ img, title }) => {
  return (
    <>
      {/* <div className="row">
        <div className="col"> */}
      <div class="card cardcc mb-3 shadow-lg p-3 mb-5 bg-white rounded mt-3 ">
        <div className="category-wrapper-item">
          <div class="row g-0">
            <div class="col-md-6 col-sm-12 col-xs-12 ">
              <img src={img} class="img-fluid rounded-start" alt="...TO ADD" />
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 ">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
              </div>
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
