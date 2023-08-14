import React from "react";

const Cards = () => {
  return (
    <>
      <div
        class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded"
        style={{ maxWidth: "5px;" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...TO ADD" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
