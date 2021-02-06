import React from "react";
import '../Style/calculator.css';

const Button = props => {
  return (
    <button
      className={props.children === "=" ? "result" : "b"}
      onClick={() => {
        props.oper(props.children);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
