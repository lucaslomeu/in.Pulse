import React from 'react';
import './SearchClient.scss';
import Input from '../Input/Input';

const SearchClient = () => {
  return (
    <div className="search-client">
      <div className="select-people">
        <input type="radio" name="people" id="fisica" value="Física" checked />
        <label for="fisica">Física</label>
        <input type="radio" name="people" id="juridica" value="Jurídica" />
        <label for="juridica">Jurídica</label>
      </div>

      <div className="stroke"></div>

      <div className="inputs-container">
        <div className="client-container">
          <div className="client-info">
            <Input type="text" titleInput="Razão Social" />
            <Input type="text" titleInput="Nome Fantasia" />
            <Input type="text" titleInput="Contato" />
            <Input type="number" titleInput="CPF/CNPJ" />
            <Input type="number" titleInput="RG/Inscrição Estadual" />
            <Input type="text" titleInput="Código ERP" />
            <Input type="text" titleInput="Campanha" />
            <Input type="text" titleInput="Carteira" />
            <Input type="date" titleInput="Data do Cadastro" />
            <Input type="phone" titleInput="Telefone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchClient;
