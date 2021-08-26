import styled from 'styled-components';

interface IProps {
  padding?: string;
  margin?: string;
  columns: string;
  rows?: string;
  gap?: string;
  justify?: string;
  align?: string;
}

const Grid = styled.div<IProps>`
  width: 100%;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-auto-rows: ${(props) => props.rows};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
`;

Grid.defaultProps = {
  gap: '0px',
  rows: 'initial',
  padding: '0px',
  margin: '0px',
  justify: 'start',
  align: 'initial',
};

export default Grid;
