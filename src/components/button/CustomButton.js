import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

const CustomButton = ({ variant, size, className, label, onClickRedirect }) => {
  const navigate = useNavigate(); // Get the history object from react-router-dom

  const handleClick = () => {
    if (onClickRedirect) {
      navigate(onClickRedirect); // Redirect to the specified route
    }
  };
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {label} <i className="fa fa-angle-double-right" aria-hidden="true"></i>
    </Button>
  );
};

export default CustomButton;
