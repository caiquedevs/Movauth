import { ReactElement } from 'react';

import { Container } from './styled';
import { H1, Row, Column } from '../../components';

import DaysList from './DaysList';
import TransactionsList from './TransactionsList';
import DetailsTransaction from './DetailsTransaction';

function Home(): ReactElement {
  return (
    <Container>
      <H1>Cadastrar novo funcionário</H1>

      <Row>
        <Column col={4}>
          <DaysList />
        </Column>

        <Column col={4}>
          <TransactionsList />
        </Column>

        <Column col={4}>
          <DetailsTransaction />
        </Column>
      </Row>
    </Container>
  );
}

export default Home;
