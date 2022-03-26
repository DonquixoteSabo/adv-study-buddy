import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-column: 2/3;
  grid-row: 2/-1;
  padding: ${({ theme }) => theme.spacing.l};

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
  }
`;
