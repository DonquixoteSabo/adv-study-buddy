import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3em;

  .icon-wrapper {
    display: flex;
  }

  button {
    margin-left: 10px;
  }

  header {
    font-weight: 700;
  }
`;

export const Time = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};

  p {
    margin: 0;
  }

  .date {
    font-weight: 700;
  }
`;
