import styled from 'styled-components';

interface IListItem {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  nav {
    height: calc(95vh - 179px);
    overflow: scroll;

    /* width of the entire scrollbar */
    &::-webkit-scrollbar {
      width: 0px;
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
  align-items: flex-end;
  gap: 9px;
`;

export const ListItem = styled.li<IListItem>`
  width: 85%;

  div.card {
    width: 100%;
    min-height: min-content;
    padding: 23px 22px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    background-color: ${({ theme }) => theme.colors.bgSecondary};

    &:after {
      content: '9:00';
      position: absolute;
      top: 15px;
      left: -45px;

      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.02em;
      color: #a8a8a8;
    }

    header {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 5px;

      p {
        color: ${({ theme }) => theme.colors.txtSecondary};
      }
    }

    footer {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        display: flex;
        align-items: center;
        gap: 8px;

        cursor: pointer;
        user-select: none;

        span.check {
          display: none;
        }

        input[type='checkbox'] {
          width: 20px;
          height: 20px;

          appearance: none;
          background-color: ${({ theme }) => theme.colors.bgPrimary};

          position: absolute;
          z-index: 1;

          transition: 0.2s ease-out background-color;
          cursor: pointer;

          &:checked {
            background-color: transparent;
          }

          &:checked ~ span.check {
            display: flex;
          }

          &:checked ~ span.not-check {
            display: none;
          }
        }
      }

      span.fatura {
        font-weight: bold;
        font-size: 17px;
        color: #f34a4a;
      }
    }
  }
`;
