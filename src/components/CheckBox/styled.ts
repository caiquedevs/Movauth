import styled from 'styled-components';

export const BtnCheck = styled.label`
  width: max-content;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  user-select: none;

  input[type='checkbox'] {
    appearance: none;
    display: none;
  }

  span.container-check {
    width: 64px;
    height: 24px;
    background: #cccccc;
    border-radius: 20px;
    transition: 0.3s;
  }

  span.circle {
    width: 26px;
    height: 12px;
    background: ${(props) => props.theme.colors.txtPrimary};
    border-radius: 20px;

    position: absolute;
    top: 6px;
    left: 6px;
    transition: 0.2s;
  }

  input[type='checkbox']:checked ~ span.circle {
    left: 32px;
  }

  input[type='checkbox']:checked ~ span.container-check {
    background: ${(props) => props.theme.colors.primary};
  }
`;
