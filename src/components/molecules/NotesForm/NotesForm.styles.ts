import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 340px;
  max-height: 600px;
  background: white;
  display: grid;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.2);
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.l};

  div {
    display: grid;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: ${({ theme }) => theme.spacing.m} 0;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
