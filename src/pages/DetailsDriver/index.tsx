import { ReactElement, useEffect, memo } from 'react';
import { format } from 'date-fns';

import { Container } from './styled';

import { Row, Button, Card, H1, BtnBack } from '../../components';
import StarsIcon from '../../assets/icons/stars';

import useQuery from '../../hooks/useQuery';

interface Props {}

function DriverInfoComponent(props: Props): ReactElement {
  const query = useQuery();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const driverId = query.get('driver');
  }, [query]);

  return (
    <Container thumb="/images/thumbnail.jpg">
      <div className="flex items-center mb-35 gap-10">
        <BtnBack />
        <H1>Detalhes do motorista</H1>
      </div>

      <div className="flex gap-45">
        <div>
          <div className="thumbnail" />
          <Button
            type="button"
            width="250px"
            height="41px"
            className="flex justify-start px-20 bg-info radius-5 fs-md fw-semiBold color-white"
          >
            Enviar Solicitação
          </Button>

          <Button
            type="button"
            width="250px"
            height="41px"
            className="flex justify-start px-20 bg-linear-dark radius-5 fs-md fw-semiBold color-white"
          >
            Visão geral
          </Button>
        </div>

        <div className="flex-1">
          <header>
            <div>
              <h3 className="fw-regular fs-lg color-secondary">
                Nome do motorista
              </h3>
              <h2 className="fw-regular fs-lg color-primary">
                Caique Lourenço Moreira
              </h2>
            </div>

            <h2>Visão Geral</h2>
          </header>

          <div className="meta-data">
            <small>Motorista</small>
            <small>Desde {format(new Date(), 'dd.MM.yyy')}</small>
            <small>270 Viagens</small>
            <small>
              <StarsIcon /> (30)
            </small>
          </div>

          <Card className="px-25 pt-20 pb-30 mb-15">
            <h2 className="fs-lg fw-regular mb-5">Sobre mim</h2>
            <p className="fs-md fw-regular color-secondary">
              Motorista muito responsável entregou tudo no tempo correto, muito
              pontual e educado, está de parabéns !!
            </p>
          </Card>

          <Card className="px-25 pt-20 pb-30 mb-15">
            <h2 className="fs-lg fw-regular mb-10">Redes sociais</h2>
            <Row gap="10px">
              <img width="29px" src="/images/facebook.png" alt="facebook" />
              <img width="29px" src="/images/twitter.png" alt="twitter" />
              <img width="29px" src="/images/instagram.png" alt="instagram" />
              <img width="29px" src="/images/wpp.png" alt="wpp" />
            </Row>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default memo(DriverInfoComponent);
