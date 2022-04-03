import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/-1;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.primary};
  flex-wrap: wrap;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const Row = styled.div`
  width: 40%;
  min-width: 340px;
  height: 700px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.m};
  margin: ${({ theme }) => theme.spacing.m};
`;
