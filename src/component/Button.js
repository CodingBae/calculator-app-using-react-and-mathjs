import React from 'react';
import './Button.css';

const Button = (props) => {

  const isOperator = value => {
    return !isNaN(value) || value === "=" || value === ".";
  };

  return (
    <div className={`button 
        ${isOperator(props.children) ? null : "is-operator"}`}
      onClick={()=> props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}


export default Button;