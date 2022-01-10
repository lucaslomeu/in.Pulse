import React from 'react';
import CallDetail from '../CallDetail/CallDetail';
import './Card.scss';

const Card = ({ titleCard }) => {
  return (
    <div className="card">
      <h1 className="titleCard">{titleCard}</h1>
      {titleCard === 'Detalhes de Ligação' && <CallDetail />}
      {titleCard === 'Pedidos' && (
        <div className="card-content">
          <div className="card-item">
            <span>Pedidos:</span> 12
          </div>
          <div className="card-item">
            <span>Pedidos Fechados:</span> 4
          </div>
          <div className="card-item">
            <span>Pedidos Fidelizados:</span> 5
          </div>
        </div>
      )}
      {titleCard === 'Ligações' && (
        <div className="card-content">
          <div className="card-item">
            <span>Ligações efetuadas:</span> 5
          </div>
          <div className="card-item">
            <span>Tempo em ligação:</span> 12:21:34
          </div>
          <div className="card-item">
            <span>Tempo total em ligações:</span> 43:12:03
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
