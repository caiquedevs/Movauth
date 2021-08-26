import styled from 'styled-components';

interface IProps {
  noSection?: string;
}

export const Header = styled.header<IProps>`
  width: 100%;
  height: 84px;
  padding: 0 50px 0 25px;
  margin-bottom: ${(props) => (props.noSection ? '0' : '57px')};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #eef2f3;
  background-color: #ffffff;

  :before {
    content: '';
    width: 100%;
    height: 256px;

    display: ${(props) => (props.noSection ? 'none' : 'flex')};
    position: absolute;
    top: 0;
    right: 0;
    background-color: orange;
    z-index: -1;
  }

  h1 {
    font-weight: 500;
    font-size: 21px;
    line-height: 139.8%;
    color: #000000;
  }

  div.icons-group {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }

    button.btn-search {
      margin-right: 30px;
    }

    span {
      width: auto;

      display: flex;
      align-items: center;

      font-size: 15px;
      line-height: 139.8%;
      color: silver;

      strong {
        width: 26px;
        height: 26px;
        margin: 0 12px 0 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: bold;
        font-size: 15px;
        line-height: 18px;

        color: #ffffff;
        background-color: orange;
        border-radius: 3px;
      }
    }
  }
`;
