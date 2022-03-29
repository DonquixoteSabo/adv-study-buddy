import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-column: 2/3;
  grid-row: 2/-1;
  padding: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.primary};
  max-height: 100vh;
  overflow-y: scroll;

  header h1 {
    font-size: ${({ theme }) => theme.fontSize.xl2};
    font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-weight: 700;
    margin: 1em 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 800px;
`;
