import { Button, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Media } from "reactstrap";

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="align-middle slick-slide">
          <Carousel.Caption className="carousel-elem">
            <h1 class="font-weight-bold text-white mb-3 h2">
              Together Ahead for Sustainable Future
            </h1>
          </Carousel.Caption>
        </div>

        <img
          src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/website-banner-1920x6801.png"
          alt="banner"
          class="image-banner-img img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/Web-Banner.jpg"
          alt="banner"
          class="image-banner-img img-fluid"
        />
        <Carousel.Caption className="carousel-elem">
          <div className="d-grid gap-2">
            <h1 class="font-weight-bold text-white mb-3 h2">
              Application Open for Nabil SSE Fellowship Programme - Third Cohort
            </h1>
            <Button variant="danger" size="sm">
              Learn More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/Individual/NabilSME Co-marketing Banner.png"
          alt="banner"
          class="image-banner-img img-fluid"
        />
        <Carousel.Caption className="carousel-elem">
          <div className="d-grid gap-2">
            <h1 class="font-weight-bold text-white mb-3 h2">
              Attractive Discounts Await You!
            </h1>
            <h5 class="text-white font-weight-light mb-3">
              Connecting Nabil SME businesses to all Nabil Customers
            </h5>
            <Button variant="danger" size="sm">
              Offers and Discount
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/Individual/Online FD.png"
          alt="banner"
          class="image-banner-img img-fluid"
        />
        <Carousel.Caption className="carousel-elem">
          <div className="d-grid gap-2">
            <h1 class="font-weight-bold text-white mb-3 h2">
              Open Fixed Deposit Instantly
            </h1>
            <h5 class="text-white font-weight-light mb-3">
              Now you can open Fixed Deposit from the comfort of your home.
            </h5>
            <Button variant="danger" size="sm">
              Open Online Fixed Deposit
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://siteadmin.nabilbank.com/assets/backend/uploads/Banners/Individual/individual-main-banner.jpg"
          alt="banner"
          class="image-banner-img img-fluid"
        />
        <Carousel.Caption className="carousel-elem">
          <div>
            <h1 class="font-weight-bold text-white mb-3 h2">
              Looking to finance your next chapter?
            </h1>

            <h5 class="text-white font-weight-light mb-3">
              Join the fastest growing bank in Nepal. Open an account digitally
              in minutes.
            </h5>
            <Button variant="danger" size="sm">
              Open an Account Now
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselItem;
