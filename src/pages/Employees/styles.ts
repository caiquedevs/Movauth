import styled from 'styled-components';
import { Card as card } from '../../components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  padding-top: 67px;
  padding-right: 72px;

  overflow-y: scroll;

  div.card-employee {
    figure {
      width: max-content;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      svg {
      }

      figcaption {
        margin-top: 13px;

        font-size: 17px;
        line-height: 139.8%;
        color: ${({ theme }) => theme.colors.txtPrimary};

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        small {
          font-size: 17px;
          line-height: 139.8%;
          color: ${({ theme }) => theme.colors.txtSecondary};
        }
      }
    }
  }
`;

export const CardAddEmployee = styled(card)`
  button {
    width: min-content;
    padding: 10px;
    margin-bottom: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover svg.dashed-icon {
      animation: dash 2s linear infinite;
    }

    svg.dashed-icon {
      position: absolute;
    }

    div.container-icon {
      width: 58px;
      height: 58px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.txtPrimary};

      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }

  span {
    font-weight: normal;
    font-size: 17px;
    line-height: 139.8%;
    color: ${(props) => props.theme.colors.txtSecondary};
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 100;
      stroke-dasharray: 9999;
    }
  }
`;
