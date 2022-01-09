import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SearchClient from '../../components/SearchClient/SearchClient';

const Home = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="content">
        <Header />
        <div className="itens">
          <div className="cards-container">
            <Card titleCard="Detalhes de Ligação" />
            <Card titleCard="Pedidos" />
            <Card titleCard="Ligações" />
          </div>
        </div>
        <div className="client-content">
          <SearchClient />
        </div>
      </div>
    </div>
  );
};

export default Home;
