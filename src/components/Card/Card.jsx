import React from 'react';
import './Card.scss';

const Card = ({ titleCard }) => {
  return (
    <div className="card">
      <h1>{titleCard}</h1>
      {titleCard === 'Tempo logado' && <p>Tempo logado:</p>}
      {titleCard === 'Pedidos' && (
        <div>
          <p>Pedidos:</p>
          <p>Pedidos Fechados:</p>
          <p>Pedidos Fidelizados:</p>
        </div>
      )}
      {titleCard === 'Ligações' && (
        <div>
          <p>Ligações efetuadas:</p>
          <p>Tempo em ligação:</p>
          <p>Tempo total em ligações:</p>
        </div>
      )}
    </div>
  );
};

export default Card;
