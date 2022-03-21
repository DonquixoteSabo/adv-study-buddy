import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-right: 1em;
  }
`;