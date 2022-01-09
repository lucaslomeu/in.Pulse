import { React, useState } from 'react';
import './SearchClient.scss';
import Input from '../Input/Input';

const SearchClient = () => {
  const [labelText, setLabelText] = useState('CPF');
  const [RGText, setRGText] = useState('RG');

  const handleChecked = (e) => {
    const value = e.target.value;
    if (value === 'Jurídica') {
      setLabelText('CNPJ');
      setRGText('Inscrição Estadual');
    } else {
      setLabelText('CPF');
      setRGText('RG');
    }
  };

  return (
    <div className="search-client">
      <div className="select-people">
        <input
          type="radio"
          name="people"
          id="fisica"
          value="Física"
          onClick={handleChecked}
        />
        <label htmlFor="fisica">Física</label>
        <input
          type="radio"
          name="people"
          id="juridica"
          value="Jurídica"
          onClick={handleChecked}
        />
        <label htmlFor="juridica">Jurídica</label>
      </div>

      <div className="stroke"></div>

      <div className="inputs-container">
        <div className="client-container">
          <div className="client-info">
            <Input type="text" titleInput="Razão Social" />
            <Input type="text" titleInput="Nome Fantasia" />
            <Input type="text" titleInput="Contato" />
            <Input type="number" titleInput={labelText} />
            <Input type="number" titleInput={RGText} />
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
