import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 67px;
  padding-right: 72px;

  overflow: scroll;

  /* largura do scroll vertical e horizonal*/
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Cor do scroll*/
  ::-webkit-scrollbar-thumb {
    background: silver;
  }
  /* Fundo do scroll*/
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  table {
    width: 100%;
    min-width: 991px;

    border-collapse: separate;
    border-spacing: 0px 10px;
  }
`;

export const THead = styled.thead`
  tr {
    th {
      padding-bottom: 25px;
      text-align: left;
      color: ${({ theme }) => theme.colors.txtSecondary};
    }
  }
`;

export const TBody = styled.tbody`
  tr {
    width: 100%;
    height: auto;
    margin-bottom: 10px;

    color: ${({ theme }) => theme.colors.txtPrimary};
    background-color: ${({ theme }) => theme.colors.bgSecondary};

    td {
      height: 64px;
      min-height: 64px;
    }

    td:first-child {
      padding-left: 25px;

      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    td:last-child {
      padding-left: 25px;

      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;
