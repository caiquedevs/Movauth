import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 67px 72px 67px 0;

  overflow-y: scroll;

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

  div.items-group {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 30px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, auto));
  grid-template-rows: 192px 455px 156px;
  row-gap: 30px;
`;

export const CardGroup = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, auto));
  grid-template-rows: repeat(1, minmax(192px, 25vh));
  column-gap: 25px;

  figure {
    display: flex;

    :after {
      content: '';
      width: 30px;
      height: 3px;

      position: absolute;
      left: 0;
      bottom: -10px;

      background-color: ${({ theme }) => theme.colors.txtInactive};
    }

    img {
      margin-right: 15px;
    }

    figcaption {
      font-size: 16px;
      line-height: 139.8%;
      color: ${({ theme }) => theme.colors.txtSecondary};
    }
  }

  div.text-group {
    font-weight: 500;
    font-size: 18px;
    line-height: 139.8%;
    color: ${({ theme }) => theme.colors.txtSecondary};

    display: flex;
    flex-direction: column;
  }

  div:nth-child(3) {
    color: ${({ theme }) => theme.colors.txtPrimary};
    background-color: ${({ theme }) => theme.colors.cardActive};

    figure {
      color: ${({ theme }) => theme.colors.txtPrimary};

      &:after {
        background-color: ${({ theme }) => theme.colors.txtPrimary};
      }

      figcaption {
        color: ${({ theme }) => theme.colors.txtPrimary};
      }
    }

    div.text-group {
      color: ${({ theme }) => theme.colors.txtPrimary};
    }
  }
`;

export const LargeCard = styled.div`
  padding: 30px 50px 30px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.cardActive};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.13);

  figure {
    display: flex;
    align-items: center;

    figcaption {
      margin-left: 20px;

      display: flex;
      flex-direction: column;

      font-weight: bold;
      font-size: 19px;
      line-height: 139.8%;
      letter-spacing: 0.08em;
      color: #dddddd;

      span {
        margin-top: 3px;
        display: block;
      }
    }
  }

  span.text-group {
    display: flex;
    flex-direction: column;

    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #ffffff;

    strong {
      font-weight: 500;
      font-size: 34px;
      line-height: 40px;
      letter-spacing: -0.03em;
    }
  }
`;

export const Aside = styled.aside`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ListEmployees = styled.ul`
  width: 100%;
  height: 435px;
  padding: 30px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const ListItemEmployees = styled.li`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + li {
    margin-top: 30px;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    figcaption {
      margin-left: 10px;

      display: flex;
      flex-direction: column;

      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 139.8%;
        color: ${({ theme }) => theme.colors.txtPrimary};
      }

      small {
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;

        color: ${({ theme }) => theme.colors.txtSecondary};
      }
    }

    svg {
      width: 44px;
      height: 44px;
      background: ${({ theme }) => theme.colors.primary};
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.13);

      path {
        fill: #ffffff;
      }
    }
  }
`;
