import React from 'react';
import './HistoryClient.scss';
import { BiUpArrowAlt } from 'react-icons/bi';

const HistoryClient = () => {
  return (
    <div className="history-client">
      <input
        type="search"
        className="search-input"
        placeholder="Digite o que você procura"
      />
      <table className="table-history">
        <thead className="head-table">
          <tr className="row-head">
            <th>Campanha</th>
            <th>Tipo Ligação</th>
            <th>Operador</th>
            <th>Resultado</th>
            <th>
              <div className="th-arrow">
                Início
                <BiUpArrowAlt />
              </div>
            </th>
            <th>
              <div className="th-arrow">
                Fim
                <BiUpArrowAlt />
              </div>
            </th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody className="body-table">
          <tr className="row">
            <td>INFOTEC - INAT_R</td>
            <td>ATIVO</td>
            <td>Lucas Lomeu</td>
            <td>Cliente não atendeu</td>
            <td>09/01/2021 14:29</td>
            <td>09/01/2021 14:41</td>
            <td>33 999321998</td>
          </tr>
          <tr className="row">
            <td>INFOTEC - INAT_R</td>
            <td>ATIVO</td>
            <td>Lucas Lomeu</td>
            <td>Cliente não atendeu</td>
            <td>09/01/2021 14:29</td>
            <td>09/01/2021 14:41</td>
            <td>33 999321998</td>
          </tr>
          <tr className="row">
            <td>INFOTEC - INAT_R</td>
            <td>ATIVO</td>
            <td>Lucas Lomeu</td>
            <td>Cliente não atendeu</td>
            <td>09/01/2021 14:29</td>
            <td>09/01/2021 14:41</td>
            <td>33 999321998</td>
          </tr>
          <tr className="row">
            <td>INFOTEC - INAT_R</td>
            <td>ATIVO</td>
            <td>Lucas Lomeu</td>
            <td>Cliente não atendeu</td>
            <td>09/01/2021 14:29</td>
            <td>09/01/2021 14:41</td>
            <td>33 999321998</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <div className="btn-pagination selected">1</div>
        <div className="btn-pagination">2</div>
        <div className="btn-pagination">3</div>
        <div className="btn-pagination">...</div>
        <div className="btn-pagination">10</div>
      </div>
    </div>
  );
};

export default HistoryClient;
