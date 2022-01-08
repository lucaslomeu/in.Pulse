import React from 'react';
import './Input.scss';

const Input = ({ titleInput, type, placeholder }) => {
  return (
    <div className="inputForm">
      <label htmlFor={titleInput}>{titleInput}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={titleInput}
        id={titleInput}
      />
    </div>
  );
};

export default Input;
