import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  div.card-driver {
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

    button {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.txtPrimary};
    }
  }
`;
