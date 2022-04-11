import styled from 'styled-components';

interface ErrorProps {
  error: boolean;
}

export const Wrapper = styled.div<ErrorProps>`
  padding: ${({ theme }) => theme.spacing.m};
  border: 3px solid #ff8383;
  border-radius: 15px;
  position: absolute;
  bottom: 10%;
  background: white;
  transition: 1s ease-in-out;
  transform: translateX(-50%);
  left: ${({ error }) => (error ? '50%' : '-200%')};
  z-index: 10;

  header {
    font-weight: 700;
    font-size: 20px;
  }

  color: #ff8383;
  font-family: ${({ theme }) => theme.fontFamily.roboto};
`;