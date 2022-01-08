import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />
        <div className="itens">
          <div className="cards-container">
            <Card titleCard="Tempo logado" />
            <Card titleCard="Pedidos" />
            <Card titleCard="Ligações" />
          </div>
          {/* <div className="client-container">
            <h1>Teste</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
