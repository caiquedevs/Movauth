import styled from 'styled-components';
import Card from '../Card';

export const Container = styled(Card)`
  li.recharts-legend-item.legend-item-0 {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    gap: 7px;

    text-transform: capitalize;

    span {
      color: #fff !important;
    }
  }
`;
