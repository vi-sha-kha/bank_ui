import React from "react";

const Cards = ({ img, title }) => {
  return (
    <>
      <div
        class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded w-10 h-10"
        // style={{ maxWidth: "5px;", minHeight: "5px;" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img} class="img-fluid rounded-start" alt="...TO ADD" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
