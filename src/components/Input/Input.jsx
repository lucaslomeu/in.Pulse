import React from 'react';
import './Input.scss';

const Input = ({ titleInput, type }) => {
  return (
    <div className="inputForm">
      <label htmlFor={titleInput}>{titleInput}</label>
      <input
        type={type}
        placeholder={titleInput}
        name={titleInput}
        id={titleInput}
      />
    </div>
  );
};

export default Input;
