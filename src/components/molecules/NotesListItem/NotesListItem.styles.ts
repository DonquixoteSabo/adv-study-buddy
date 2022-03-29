import styled from 'styled-components';

export const Wrapper = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.s};

  div {
    display: flex;
    align-items: center;
  }

  header {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-left: 8px;
  }
`;
