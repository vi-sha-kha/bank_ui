import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CustomButton from "../button/CustomButton"; // Assuming you have already created the CustomButton component

const CustomCarouselItem = ({
  imageSrc,
  title,
  subtitle,
  buttonText,
  buttonVariant,
  onClickRedirect,
}) => {
  return (
    <Carousel.Item>
      <img
        src={imageSrc}
        alt="banner"
        className="image-banner-img img-fluid new-height"
      />
      <Carousel.Caption className="carousel-elem carousel-caption-new d-flex flex-column justify-content-center align-items-center">
        <div className="d-grid gap-2">
          <h1 className="font-weight-bold text-white mb-3 h2">{title}</h1>
          <h5 className="text-white font-weight-light mb-3">{subtitle}</h5>
          <CustomButton
            variant={buttonVariant}
            label={buttonText}
            size="sm"
            className="btn-carousel"
            onClickRedirect={onClickRedirect}
          />
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default CustomCarouselItem;
