import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CustomButton from "../button/CustomButton"; // Assuming you have already created the CustomButton component

const CustomCarouselCaption = ({
  title,
  title2,
  buttonText,
  buttonVariant,
  onClickRedirect,
}) => {
  return (
    <Carousel.Caption className="carousel-elem carousel-caption-new d-flex flex-column justify-content-center align-items-center">
      <div className="d-grid gap-2">
        <h1 className="font-weight-bold text-white mb-3 h2">{title}</h1>
        <h5 class="text-white font-weight-light mb-3">{title2}</h5>
        <CustomButton
          variant={buttonVariant}
          label={buttonText}
          size="xs"
          className="btn-carousel"
          onClickRedirect={onClickRedirect}
        />
      </div>
    </Carousel.Caption>
  );
};

export default CustomCarouselCaption;
