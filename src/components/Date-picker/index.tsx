import { useState } from 'react';
import { ptBR } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

import { Container } from './styled';
import Card from '../Card';

export default function DatePickerCalendarExample() {
  const [date] = useState(new Date());

  const handleChangeDate = () => {};

  return (
    <Container>
      <Card display="block" padding="30px" className="shadow">
        <DatePickerCalendar
          date={date}
          minimumDate={new Date('2021, 01, 01')}
          maximumDate={date}
          onDateChange={handleChangeDate}
          weekdayFormat="EEEEEE"
          locale={ptBR}
        />
      </Card>
    </Container>
  );
}
