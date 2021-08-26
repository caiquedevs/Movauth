import { RiUserSmileFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Card } from '../../../components';

import { Container } from './styles';
import { Grid, Row } from '../../../components';

interface DetailsTransactionProps {}

function DetailsTransaction(props: DetailsTransactionProps) {
  return (
    <Container>
      <Grid
        columns="minmax(max-content, 6vh) minmax(100px, 0%)"
        rows="minmax(50px, 6vh)"
        margin="0 0 35px 0"
        align="center"
        justify="end"
        gap="33px"
      >
        <Row direction="column" align="flex-end">
          <small>Carteira</small>
          <span>R$ 246,030</span>
        </Row>

        <Card
          className="shadow"
          height="100%"
          padding="0 10px"
          align="center"
          justify="space-between"
        >
          <RiUserSmileFill size="40" />
          <MdKeyboardArrowDown size="23" />
        </Card>
      </Grid>

      <Card className="shadow" padding="23px" minHeight="calc(95vh - 179px)">
        DETALHES
      </Card>
    </Container>
  );
}

export default DetailsTransaction;
