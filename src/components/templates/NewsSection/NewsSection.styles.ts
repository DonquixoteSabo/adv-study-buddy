import styled from 'styled-components';

export const Wrapper = styled.section`
  display: none;
  grid-column: 3/4;
  grid-row: 1/-1;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.l};
  overflow-y: auto;
  height: 100vh;
  @media (min-width: 1000px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: ${({ theme }) => theme.letterSpacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  margin: 0;
`;
