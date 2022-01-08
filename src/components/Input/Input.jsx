import React from 'react';
import './Input.scss';

const Input = ({ titleInput, type, placeholder }) => {
  return (
    <div className="inputForm">
      <h1>{titleInput}</h1>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
