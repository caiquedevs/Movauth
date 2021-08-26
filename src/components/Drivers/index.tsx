import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styled';
import { Card, Button, Column, Row, Grid } from '../../components';
import { FaUserCircle } from 'react-icons/fa';

interface IProps {}

function Drivers(props: IProps): ReactElement {
  const history = useHistory();

  const handleClickDriver = () => {
    history.push('/employees/driver');
  };

  return (
    <Container>
      <Grid
        columns="repeat(auto-fit, minmax(260px, auto))"
        rows="minmax(256px, auto)"
        gap="30px"
        padding="0 0 60px 0"
      >
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
          <Card
            direction="column"
            align="center"
            justify="center"
            className="card-driver shadow"
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

export default Drivers;
