import styled from 'styled-components';

export const Container = styled.div`
  width: 64px;
  height: calc(100vh - 40px);
  margin: auto 72px auto 15px;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 100px;
  background-color: #212832;

  nav {
    margin: auto 0;

    ul li button {
      width: 64px;
      height: 54px;

      svg {
        pointer-events: none;
      }

      &.active {
        background-color: #262c36;

        svg path {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
