import React from "react";
import { Nav, Stack } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const CarouselMini = () => {
  return (
    <>
      <div class="noticeBanner-wrapper">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block "
              src={"bg-carousel.avif"}
              alt="First slide"
              width={100}
            />
            <Carousel.Caption>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <h4>RFP call for AML/CFT Expert or Consultant </h4>
                  </div>
                  <div className="p-2 ms-auto">
                    <Nav.Link href="https://www.nabilbank.com/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
                      Read More
                    </Nav.Link>
                  </div>
                  <div className="vr" />
                  <div className="p-2">
                    <h4>Email the details</h4>
                  </div>
                </Stack>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block"
              src={"bg-carousel.avif"}
              alt="First slide"
              width={100}
            />
            <Carousel.Caption>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <h4>RFP call for AML/CFT Expert or Consultant </h4>
                  </div>
                  <div className="p-2 ms-auto">
                    <Nav.Link href="https://www.nabilbank.com/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
                      Read More
                    </Nav.Link>
                  </div>
                  <div className="vr" />
                  <div className="p-2">
                    <h4>Email the details</h4>
                  </div>
                </Stack>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={"bg-carousel.avif"}
              alt="First slide"
              width={100}
            />
            <Carousel.Caption>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2">
                    <h4>RFP call for AML/CFT Expert or Consultant </h4>
                  </div>
                  <div className="p-2 ms-auto">
                    <Nav.Link href="https://www.nabilbank.com/individuals/notices/account-freeze-notice-for-dormant-accounts-for-10-years-and-above">
                      Read More
                    </Nav.Link>
                  </div>
                  <div className="vr" />
                  <div className="p-2">
                    <h4>Email the details</h4>
                  </div>
                </Stack>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
{
}

export default CarouselMini;
