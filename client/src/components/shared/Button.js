import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type,
  className,
  disable,
  buttonClick,
  label,
  activeStyles,
  disableStyles,
}) => (
  <button
    type={type}
    className={className}
    onClick={buttonClick}
    disabled={disable}
    style={disable ? disableStyles : activeStyles}
  >
    {label}
  </button>
);

Button.defaultProps = {
  activeStyles: {
    minHeight: "48px",
    fontSize: "1rem",
    padding: "15px 32px",
    background: "#009edd",
    color: "#fff",
    transition: "box-shadow .1s",
    borderRadius: "1000px",
  },
  disableStyles: {
    minHeight: "48px",
    fontSize: "1rem",
    padding: "15px 32px",
    background: "#EBEBE4",
    color: "#0a0a23",
    transition: "box-shadow .1s",
    borderRadius: "1000px",
  },
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};

export default Button;
