import React from 'react';
import './HistoryClient.scss';

const HistoryClient = () => {
  return (
    <div className="history-client">
      <table className="table-history">
        <thead className="head-table">
          <tr className="row">
            <th>Camapanha</th>
            <th>Tipo Ligação</th>
            <th>Operador</th>
            <th>Resultado</th>
            <th>Início</th>
            <th>Fim</th>
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
    </div>
  );
};

export default HistoryClient;
