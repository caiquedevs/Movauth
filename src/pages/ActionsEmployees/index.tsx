import { ReactElement } from 'react';

import { Container, THead, TBody } from './styled';
import { H1 } from '../../components';

function ActionsEmployees(): ReactElement {
  return (
    <Container>
      <H1>Relatórios do sistema</H1>

      <table cellSpacing="0">
        <THead>
          <tr>
            <th>Plataforma</th>
            <th>Categoria</th>
            <th>Funcionários</th>
            <th>Horário</th>
            <th>Valor Total</th>
            <th>Status</th>
          </tr>
        </THead>
        <TBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
            <tr className="shadow">
              <td>Movauth</td>
              <td>Logou-se</td>
              <td>Joseffe Oliveira</td>
              <td>10h30</td>
              <td>Sem valor</td>
              <td>OK</td>
            </tr>
          ))}
        </TBody>
      </table>
    </Container>
  );
}

export default ActionsEmployees;
