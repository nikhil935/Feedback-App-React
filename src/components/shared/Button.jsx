import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
  isDisabled: false,
  version: "primary",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
