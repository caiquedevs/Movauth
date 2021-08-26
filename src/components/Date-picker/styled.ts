import styled from 'styled-components';

export const Container = styled.div`
  .nice-dates-navigation_current {
    justify-content: center;
    color: ${({ theme }) => theme.colors.txtPrimary};
  }

  .nice-dates-day {
    color: ${({ theme }) => theme.colors.txtPrimary};
  }

  .nice-dates-day.-disabled {
    color: ${({ theme }) => theme.colors.txtInactive} !important;
  }

  .nice-dates-day_month {
    display: none;
  }

  .nice-dates-popover {
    box-shadow: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    max-width: 480px;
    transition: none;
  }
  .nice-dates-day:before {
    background-color: orange;
  }
  .nice-dates-day:after {
    border-color: orange;
  }
`;
