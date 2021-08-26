import { ReactElement, useEffect, useState, useRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { Container, ItemList, List } from './styles';
import { Button, Card } from '../../../components';

import dateGenerator from '../../../utils/dateGenerator';
import { Grid } from '../../../components';

interface DaysListProps {}

function DaysList(props: DaysListProps): ReactElement {
  const listRef = useRef<any>(null);
  const date = dateGenerator();

  const currentDay = date.dayNow();

  const [daySelected, setDaySelected] = useState<number>(currentDay);
  const [countDate, setCountDate] = useState<number>(0);

  const currentDate = date.prevOrNextMonth(countDate);
  const daysInMonth = date.daysInMonth(countDate);

  const sumOneMonth = () => {
    setCountDate(countDate + 1);
  };

  const subtractOneMonth = () => {
    setCountDate(countDate - 1);
  };

  useEffect(() => {
    const element: any = document.querySelector(`.day${daySelected}`);

    element && listRef.current?.scroll(0, element.offsetTop - 125);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = (day: string, index: number) => {
    const currentIndex = index + 1;
    const numberDay = String(currentIndex).padStart(2, '0');

    const handleSelectDay = () => {
      if (daySelected === currentIndex) return setDaySelected(0);
      setDaySelected(currentIndex);
    };

    return (
      <ItemList
        key={currentIndex}
        onClick={handleSelectDay}
        active={daySelected === currentIndex}
        className={`day${numberDay}`}
      >
        <Card className="card shadow">
          <div className="text-group-left">
            <span>{day}</span>
            <strong>{numberDay}</strong>
          </div>

          <div className="text-group-right">
            <span>4 transações</span>
            <span>Custo Total $2500</span>
          </div>
        </Card>
      </ItemList>
    );
  };

  return (
    <Container>
      <Grid
        columns="minmax(205px, 60%)"
        rows="minmax(6vh, auto)"
        margin="0 0 35px 0"
      >
        <Card
          radius="8px"
          align="center"
          padding="0 10px"
          justify="space-between"
          txtTransform="capitalize"
          className="shadow"
        >
          <Button
            type="button"
            onClick={subtractOneMonth}
            padding="5px"
            width="30px"
            height="50px"
          >
            <RiArrowLeftSLine size="25" />
          </Button>

          {currentDate}

          <Button
            type="button"
            onClick={sumOneMonth}
            padding="5px"
            width="30px"
            height="50px"
          >
            <RiArrowRightSLine size="25" />
          </Button>
        </Card>
      </Grid>

      <nav ref={listRef}>
        <List>{daysInMonth.map(renderItem)}</List>
      </nav>
    </Container>
  );
}

export default DaysList;
