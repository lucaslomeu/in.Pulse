import React from 'react';
import './Header.scss';

import { FiLogOut, FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">InPulse</div>
      <div className="info-operator">
        <div className="name-operator info-item">Lucas Lomeu</div>
        <FiSettings className="info-item" />
        <FiLogOut className="info-item" />
      </div>
    </div>
  );
};

export default Header;
