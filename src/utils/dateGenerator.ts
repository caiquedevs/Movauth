import { format, getDaysInMonth } from 'date-fns';
import addMonths from 'date-fns/addMonths';
import { ptBR } from 'date-fns/locale';

const dateGenerator = () => {
  const daysInMonth = (count: number) => {
    const dateNow = format(addMonths(new Date(), count), 'yyyy/MM');
    const totalDays = getDaysInMonth(new Date(dateNow));

    const days = [];

    for (let index = 1; index <= totalDays; index++) {
      const day = format(new Date(dateNow + '/' + index), 'eeeeee', {
        locale: ptBR,
      });
      days.push(day);
    }
    return days;
  };

  const prevOrNextMonth = (count = 0) => {
    const date = addMonths(new Date(), count);
    return format(date, 'MMMM yyyy', { locale: ptBR });
  };

  const dayNow = () => {
    const day = format(new Date(), 'dd');
    return Number(day);
  };

  return { prevOrNextMonth, daysInMonth, dayNow };
};

export default dateGenerator;
