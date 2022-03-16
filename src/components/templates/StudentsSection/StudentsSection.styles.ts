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

export const Header = styled.header`
  line-height: ${({ theme }) => theme.lineHeights.md};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
`;
