import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1em 0;

  header {
    font-weight: 700;
  }

  .icon {
    font-size: 14px;
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
