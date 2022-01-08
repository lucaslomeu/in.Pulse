import React from 'react';
import './SearchClient.scss';
import Input from '../Input/Input';
import { CgAdd } from 'react-icons/cg';

const SearchClient = () => {
  return (
    <div className="search-client">
      <div className="select-people">
        <input type="radio" name="people" id="fisica" value="Física" />
        <label for="fisica">Física</label>
        <input type="radio" name="people" id="juridica" value="Jurídica" />
        <label for="juridica">Jurídica</label>
      </div>
      <div className="stroke"></div>
      <div className="inputs-container">
        <div className="client-content">
          <div className="client-info">
            <Input type="text" titleInput="Razão Social" />
            <Input type="text" titleInput="Nome Fantasia" />
            <Input type="text" titleInput="Contato" />
            <Input type="text" titleInput="CPF/CNPJ" />
            <Input type="text" titleInput="RG/Inscrição Estadual" />
            <Input type="text" titleInput="CPF/CNPJ" />
            <Input type="text" titleInput="Código ERP" />
            <Input type="text" titleInput="Campanha" />
            <Input type="text" titleInput="Carteira" />
            <Input type="date" titleInput="Data do Cadastro" />
          </div>
          <div className="stroke"></div>
          <div className="client-phone">
            <Input type="number" titleInput="Área " />
            <Input type="phone" titleInput="Telefone " />
            <Input type="text" titleInput="Descrição Telefone" />
            {/* <div className="add-btn">
              <CgAdd />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchClient;
