import { ReactElement } from 'react';
import { useHistory } from 'react-router';
import { BiPlus } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

import { Container, CardAddEmployee } from './styles';
import { Button, Card, Column, H1, Row, Grid } from '../../components';
import DashedIcon from '../../assets/icons/Dashed';

interface IProps {}

function Employees(props: IProps): ReactElement {
  const history = useHistory();

  const handleClickCreateEmployee = () => {
    history.push('/employees/create-employee?type=motoboy');
  };

  const handleClickDriver = () => {
    history.push('/employees/driver');
  };

  return (
    <Container>
      <H1>Gerenciar funcionários</H1>

      <Grid
        columns="repeat(auto-fit, minmax(260px, auto))"
        rows="minmax(256px, auto)"
        gap="30px"
      >
        <CardAddEmployee
          direction="column"
          align="center"
          justify="center"
          className="shadow"
          gap="26px"
        >
          <Button type="button" onClick={handleClickCreateEmployee}>
            <DashedIcon />

            <div className="container-icon">
              <BiPlus size="35" />
            </div>
          </Button>

          <span>Adicionar Funcionário</span>
        </CardAddEmployee>

        {[1, 2, 3, 4].map((i) => (
          <Card
            direction="column"
            align="center"
            justify="center"
            className="card-employee shadow"
            gap="15px"
          >
            <figure onClick={handleClickDriver}>
              <FaUserCircle size="80" color="#4b4b50" />

              <figcaption>
                <span>Ricardo Silva</span>
                <small>Motoboy</small>
              </figcaption>
            </figure>

            <Row align="center" justify="center">
              <Column col={8}>
                <Button bg="info" height="35px">
                  Enviar Solicitação
                </Button>
              </Column>
            </Row>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Employees;
