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
          <div className="card-item">Pedidos: 12</div>
          <div className="card-item">Pedidos Fechados: 4</div>
          <div className="card-item">Pedidos Fidelizados: 5</div>
        </div>
      )}
      {titleCard === 'Ligações' && (
        <div className="card-content">
          <div className="card-item">Ligações efetuadas: 5</div>
          <div className="card-item">Tempo em ligação: 12:21:34</div>
          <div className="card-item">Tempo total em ligações: 43:12:03</div>
        </div>
      )}
    </div>
  );
};

export default Card;
