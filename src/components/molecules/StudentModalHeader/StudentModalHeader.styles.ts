import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3em;

  .modal-average {
    min-width: 50px;
    min-height: 50px;
  }
`;

export const Name = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: ${({ theme }) => theme.letterSpacing.sm};
  margin: 0 ${({ theme }) => theme.spacing.l};
`;
