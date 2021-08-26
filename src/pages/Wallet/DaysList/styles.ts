import styled, { css } from 'styled-components';

interface IProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  nav {
    height: calc(95vh - 179px);
    overflow: scroll;

    &::-webkit-scrollbar {
      width: 0px; /* width of the entire scrollbar */
    }
  }
`;

export const List = styled.ul`
  padding-right: 15px;
  padding-bottom: 15px;

  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ItemList = styled.li<IProps>`
  width: 90%;

  div.card {
    height: 100%;
    padding: 20px 30px;

    display: grid;
    grid-template-columns: minmax(0px, auto) minmax(0px, 100%);
    grid-auto-rows: minmax(0, auto);
    align-items: center;
    gap: 30px;

    background-color: ${({ theme }) => theme.colors.cardActive};
    border-radius: 8px;

    transition: 0.3s ease-out transform, 0.3s ease-out color;
    filter: brightness(0.7);
    user-select: none;
    cursor: pointer;

    span {
      font-weight: normal;
      font-size: clamp(1rem, 16px, 100rem);
      line-height: 16px;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.colors.txtInactive};
    }

    div.text-group-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      strong {
        font-weight: bold;
        font-size: clamp(2.5rem, 2.5rem, 100rem);
        line-height: 41px;
        letter-spacing: -0.11em;
        color: ${({ theme }) => theme.colors.txtInactive};
      }
    }

    div.text-group-right {
      height: 100%;
      padding-left: 20px;

      border-left: 2px solid #373e46;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    ${(props) =>
      props.active &&
      css`
        transform: translate(10px, 0px);
        filter: brightness(1);

        span {
          color: ${({ theme }) => theme.colors.txtPrimary};
        }

        div.text-group-left {
          span,
          strong {
            color: ${({ theme }) => theme.colors.primary};
          }
        }

        div.text-group-right {
          border-color: ${({ theme }) => theme.colors.primary};
        }
      `}
  }
`;
