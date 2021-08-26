import {
  Section,
  Aside,
  CardGroup,
  LargeCard,
  ListEmployees,
  ListItemEmployees,
  Container,
} from './styled';

import { H1, Card } from '../../components';

import DatePicker from '../../components/Date-picker';
import Reachart from '../../components/Bar-chart';

import icon_money from '../../assets/icons/icon_money.svg';
import icon_card from '../../assets/icons/icon_card.svg';
import icon_pig from '../../assets/icons/icon_pig.svg';
import icon_bigcard from '../../assets/icons/icon_bigcard.svg';
import ClerkIcon from '../../assets/icons/ClerkIcon';

export default function StockManagerPage() {
  return (
    <Container>
      <H1 className="mb-35">Gerenciar funcionários</H1>

      <div className="items-group">
        <Section>
          <CardGroup>
            <Card
              padding="30px"
              direction="column"
              justify="space-between"
              className="shadow"
            >
              <figure>
                <img src={icon_money} alt="icon money" />
                <figcaption>Entradas</figcaption>
              </figure>

              <div className="text-group">
                <span>Hoje</span>
                <span>R$ 1.981,00</span>
              </div>
            </Card>

            <Card
              padding="30px"
              direction="column"
              justify="space-between"
              className="shadow"
            >
              <figure>
                <img src={icon_card} alt="icon money" />
                <figcaption>Saidas</figcaption>
              </figure>

              <div className="text-group">
                <span>Hoje</span>
                <span>R$ 21.981,00</span>
              </div>
            </Card>

            <Card
              padding="30px"
              direction="column"
              justify="space-between"
              className="shadow"
            >
              <figure>
                <img src={icon_pig} alt="icon money" />
                <figcaption>Total</figcaption>
              </figure>

              <div className="text-group">
                <span>Hoje</span>
                <span>R$ 23.981,00</span>
              </div>
            </Card>
          </CardGroup>

          <Reachart />

          <LargeCard className="shadow">
            <figure>
              <img src={icon_bigcard} alt="big card icon" />
              <figcaption>
                <span>Débito e</span>
                <span>Crédito</span>
              </figcaption>
            </figure>

            <span className="text-group">
              Crédito
              <strong>R$ 300</strong>
            </span>

            <span className="text-group">
              Débito
              <strong>R$ 700</strong>
            </span>
          </LargeCard>
        </Section>

        <Aside>
          <DatePicker />

          <ListEmployees className="shadow">
            <ListItemEmployees>Ganhos por funcionários</ListItemEmployees>
            {[1, 2, 3, 4].map((item) => (
              <ListItemEmployees>
                <figure>
                  <ClerkIcon />
                  <figcaption>
                    <span>Joseffe Oliveira</span>
                    <small>25 Feb 2019</small>
                  </figcaption>
                </figure>

                <span>+ R$ 200</span>
              </ListItemEmployees>
            ))}
          </ListEmployees>
        </Aside>
      </div>
    </Container>
  );
}
