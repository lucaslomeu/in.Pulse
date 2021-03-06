import React from 'react';
import './SideBar.scss';
import logoImg from '../../assets/img/logo.png';

import { AiOutlineShoppingCart, AiOutlineSchedule } from 'react-icons/ai';
import {
  RiContactsLine,
  RiUserReceivedLine,
  RiPhoneLine,
} from 'react-icons/ri';
import { FaRegAddressCard } from 'react-icons/fa';
import { VscHistory } from 'react-icons/vsc';
import { CgNotes } from 'react-icons/cg';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <ul className="sidebar-nav">
        <li>
          <AiOutlineSchedule />
          <p>Agenda</p>
        </li>
        <li>
          <AiOutlineShoppingCart />
          <p>Compras</p>
        </li>
        <li>
          <RiContactsLine />
          <p>Contatos</p>
        </li>
        <li>
          <FaRegAddressCard />
          <p>Endereço</p>
        </li>
        <li>
          <VscHistory />
          <p>Histórico</p>
        </li>
        <li>
          <CgNotes />
          <p>Notas</p>
        </li>
        <li>
          <RiUserReceivedLine />
          <p>Receptivo</p>
        </li>
        <li>
          <RiPhoneLine />
          <p>Telefone</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
