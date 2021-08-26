import styled from 'styled-components';

interface IProps {
  col?: number;
  minCol?: string;
}

export const Label = styled.label<IProps>`
  width: ${(props) => `calc(100% / 12 * ${props.col})`};
  min-width: ${(props) => props.minCol};

  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 16px;
    line-height: 139.8%;

    color: ${({ theme }) => theme.colors.txtSecondary};
  }
`;

Label.defaultProps = {
  col: 12,
  minCol: '0px',
};
