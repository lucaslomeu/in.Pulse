import React from 'react';
import './SearchClient.scss';
import Input from '../Input/Input';

const SearchClient = () => {
  return (
    <div className="search-client">
      <div className="select-people">
        <input type="radio" name="people" id="fisica" value="Física" />
        <label for="fisica">Física</label>
        <input type="radio" name="people" id="juridica" value="Jurídica" />
        <label for="juridica">Jurídica</label>
      </div>

      <div className="inputs-container">
        <div className="inputs">
          <Input type="text" placeholder="Razão Social" />
          <Input type="text" placeholder="Nome Fantasia" />
          <Input type="text" placeholder="Contato" />
          <Input type="text" placeholder="CPF/CNPJ" />
          <Input type="text" placeholder="RG/Inscrição Estadual" />
          <Input type="text" placeholder="CPF/CNPJ" />
          <Input type="text" placeholder="Código ERP" />
          <Input type="text" placeholder="Campanha" />
          <Input type="text" placeholder="Carteira" />
          <Input type="date" placeholder="Data do Cadastro" />
        </div>
      </div>
    </div>
  );
};

export default SearchClient;
