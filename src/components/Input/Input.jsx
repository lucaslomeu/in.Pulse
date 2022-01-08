import React from 'react';
import './Input.scss';

const Input = ({ titleInput, type, placeholder, disabled = 'false' }) => {
  return (
    <div className="inputForm">
      <h1>{titleInput}</h1>
      <input type={type} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

export default Input;
