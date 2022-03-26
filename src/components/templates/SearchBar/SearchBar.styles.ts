import styled from 'styled-components';

export const Wrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.l};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  b {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;