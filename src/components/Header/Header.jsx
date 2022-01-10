import React from 'react';
import './Header.scss';

import { FiLogOut, FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header">
      <div className="info-caller">
        <div className="code">
          <span>Código:</span> 1231
        </div>
        <div className="priority">
          <span>Prioridade:</span> Supervisor
        </div>
        <div className="time-login">
          <span>Tempo logado:</span> 00:03:12
        </div>
      </div>
      <div className="info-operator">
        <div className="name-operator info-item">Lucas Lomeu</div>
        <FiSettings className="info-item" />
        <FiLogOut className="info-item" />
      </div>
    </div>
  );
};

export default Header;
