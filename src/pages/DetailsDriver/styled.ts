import styled from 'styled-components';

interface IProps {
  thumb: string;
}

export const Container = styled.div<IProps>`
  width: 100%;
  padding-top: 67px;
  padding-bottom: 67px;
  padding-right: 72px;

  div.thumbnail {
    margin-bottom: 13px;
    width: 250px;
    height: 330px;

    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    background: ${(props) => `url(${props.thumb})no-repeat top center`};
    background-size: cover;
  }

  button + button {
    margin-top: 7px;
  }

  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    border-bottom: 1px solid #3f4752;

    h2 {
      margin-top: 6px;
      margin-bottom: 12px;
      text-transform: capitalize;
    }
  }

  div.meta-data {
    margin-top: 16px;
    margin-bottom: 21px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 23px;

    small {
      font-weight: normal;
      font-size: 17px;
      line-height: 18px;
      color: #6c6c80;

      &::after {
        content: '';
        width: 1px;
        height: 16px;
        background-color: #464a59;
        display: block;
        top: 2px;
        right: -12px;
        position: absolute;
      }

      &:last-child::after {
        content: none;
      }
    }
  }

  div.card h2 {
    margin-bottom: 10px;
  }
`;
