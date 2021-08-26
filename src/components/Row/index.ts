import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
  direction?: string;
  align?: string;
  justify?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  wrap?: string;
  flex?: string;
}

const Row = styled.div<IProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  flex: ${(props) => props.flex};
  gap: ${(props) => props.gap};
`;

Row.defaultProps = {
  width: '100%',
  height: 'auto',
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  padding: '0px',
  margin: '0px',
  gap: '0px',
  wrap: 'nowrap',
  flex: 'initial',
};

export default Row;
