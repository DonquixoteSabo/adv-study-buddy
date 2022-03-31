import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClassHeader = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin: 1em 0;
`;