import styled from 'styled-components';

interface IProps {
  height?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  radius?: string;
  display?: 'flex' | 'block';
  align?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  direction?: 'row' | 'column';
  txtTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  gap?: string;
  bg?: string;
}

export const Card = styled.div<IProps>`
  width: 100%;
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};

  text-transform: ${(props) => props.txtTransform};

  border-radius: ${({ radius }) => radius};
  background-color: ${({ bg, theme }: any) => theme.colors[bg]};
`;

Card.defaultProps = {
  height: 'auto',
  minHeight: 'auto',
  padding: '0px',
  bg: 'bgSecondary',
  margin: '0px',
  display: 'flex',
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  gap: '0px',
  radius: '5px',
  txtTransform: 'capitalize',
};

export default Card;
