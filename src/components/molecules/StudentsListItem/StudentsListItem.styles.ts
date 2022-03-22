import styled from 'styled-components';

export const Wrapper = styled.li`
  border-bottom: 1px solid #dfe2e8;
  padding: 10px 0;
`;

export const StyledName = styled.p`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const StyledAttendance = styled.small`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const GridWrapper = styled.div`
  max-width: 400px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, 1.6rem);
  grid-column-gap: 10px;

  .grade {
    grid-row: 1/-1;
    grid-column: 1/2;
    align-self: center;
  }

  button {
    grid-column: 3/4;
    grid-row: 1/2;
  }
`;
