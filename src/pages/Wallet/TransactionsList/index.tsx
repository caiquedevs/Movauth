import { ReactElement, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FaCheckSquare } from 'react-icons/fa';
import { CgOptions } from 'react-icons/cg';
import { GoPlus } from 'react-icons/go';

import { Container, List, ListItem } from './styles';
import { Card, Grid } from '../../../components';

interface DaysListProps {}

function DaysList(props: DaysListProps): ReactElement {
  const [daySelected, setDaySelected] = useState<any>(null);

  const renderItem = (item: any) => {
    const handleSelectDay = () => {
      setDaySelected(item);
    };

    return (
      <ListItem
        key={item}
        active={daySelected === item}
        onClick={handleSelectDay}
        className="shadow"
      >
        <Card className="card" radius="8px">
          <header>
            <strong>Mercado</strong>
            <p>Compra mensal para casa</p>
          </header>

          <footer>
            <label htmlFor="check-payment">
              <FaCheckSquare color="#6BF52A" size="20px" />
              <input type="checkbox" name="check-payment" id="check-payment" />

              <span className="check">Pago</span>
              <span className="not-check">Pendente</span>
            </label>
            <span className="fatura"> -560,00</span>
          </footer>
        </Card>
      </ListItem>
    );
  };

  return (
    <Container>
      <Grid
        padding="0 20px 0 0"
        margin="0 0 35px 0"
        columns="minmax(50px, 6vh) minmax(150px, 0%)"
        rows="minmax(50px, 6vh)"
        justify="end"
        gap="10px"
      >
        <Card
          bg="primary"
          className="shadow"
          radius="8px"
          align="center"
          justify="center"
        >
          <GoPlus size="20" />
        </Card>

        <Card
          className="shadow"
          align="center"
          justify="space-around"
          padding="0 10px"
        >
          <CgOptions size="23" />
          Filtro
          <RiArrowDownSLine size="23" />
        </Card>
      </Grid>

      <nav>
        <List>{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(renderItem)}</List>
      </nav>
    </Container>
  );
}

export default DaysList;
