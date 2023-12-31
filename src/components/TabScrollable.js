import React from "react";

const TabScrollable = () => {
  return (
    <>
      <div class="w-100">
        <div class="scroller scroller-left float-start mt-2">
          <i class="bi bi-caret-left-fill"></i>
        </div>
        <div class="scroller scroller-right float-end mt-2">
          <i class="bi bi-caret-right-fill"></i>
        </div>
        <div class="wrapper-nav">
          <nav class="nav nav-tabs list mt-2" id="myTab" role="tablist">
            <a
              class="nav-item nav-link pointer active"
              data-bs-toggle="tab"
              data-bs-target="#tab1"
              role="tab"
              aria-controls="public"
              aria-selected="true"
            >
              Tab1
            </a>
            <a
              class="nav-item nav-link pointer"
              data-bs-target="#tab2"
              role="tab"
              data-bs-toggle="tab"
            >
              Tab 2
            </a>
            <a
              class="nav-item nav-link pointer"
              data-bs-target="#tab3"
              role="tab"
              data-bs-toggle="tab"
            >
              Tab 3
            </a>
            <a
              class="nav-item nav-link pointer"
              data-bs-target="#tab4"
              role="tab"
              data-bs-toggle="tab"
            >
              Tab 4
            </a>
            <a
              class="nav-item nav-link pointer"
              data-bs-target="#tab5"
              role="tab"
              data-bs-toggle="tab"
            >
              Tab 5
            </a>
            <a
              class="nav-item nav-link pointer"
              data-bs-target="#tab6"
              role="tab"
              data-bs-toggle="tab"
            >
              Tab 6
            </a>
          </nav>
        </div>
        <div class="tab-content p-3" id="myTabContent">
          <div
            role="tabpanel"
            class="tab-pane fade active show mt-2"
            id="tab1"
            aria-labelledby="public-tab"
          >
            This is the content of Tab 1...
          </div>
          <div
            class="tab-pane fade mt-2"
            id="tab2"
            role="tabpanel"
            aria-labelledby="group-dropdown2-tab"
          >
            This is the content of Tab 2...
          </div>
          <div
            class="tab-pane fade mt-2"
            id="tab3"
            role="tabpanel"
            aria-labelledby="group-dropdown2-tab"
          >
            This is the content of Tab 3...
          </div>
          <div
            class="tab-pane fade mt-2"
            id="tab4"
            role="tabpanel"
            aria-labelledby="group-dropdown2-tab"
          >
            This is the content of Tab 4...
          </div>
          <div
            class="tab-pane fade mt-2"
            id="tab5"
            role="tabpanel"
            aria-labelledby="group-dropdown2-tab"
          >
            This is the content of Tab 5...
          </div>
          <div
            class="tab-pane fade mt-2"
            id="tab6"
            role="tabpanel"
            aria-labelledby="group-dropdown2-tab"
          >
            This is the content of Tab 6...
          </div>
        </div>
      </div>
    </>
  );
};

export default TabScrollable;
