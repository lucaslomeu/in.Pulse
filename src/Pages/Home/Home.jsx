import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SearchClient from '../../components/SearchClient/SearchClient';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />
        <div className="right-content">
          <div className="itens">
            <div className="cards-container">
              <Card titleCard="Tempo logado" />
              <Card titleCard="Pedidos" />
              <Card titleCard="Ligações" />
            </div>
          </div>
          <SearchClient />
        </div>
      </div>
    </div>
  );
};

export default Home;
