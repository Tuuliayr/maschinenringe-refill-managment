import React from "react";
import "./_button.scss";

const Button = (props) => {
  return (
    <button className="button_primary" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
