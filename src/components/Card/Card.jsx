import React from 'react';
import './Card.scss';

const Card = ({ titleCard }) => {
  return (
    <div className="card">
      <h1 className="titleCard">{titleCard}</h1>
      {titleCard === 'Tempo logado' && (
        <div className="card-content">
          <div className="card-item">Código: 1231</div>
          <div className="card-item">Prioridade: Supervisor</div>
          <div className="card-item">Tempo logado: 00:03:12</div>
        </div>
      )}
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
