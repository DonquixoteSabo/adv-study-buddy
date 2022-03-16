import React from 'react';
import styled from 'styled-components';
import { Student, useGetStudentsByGroup } from 'hooks/useGetStudentsByGroup';

const Wrapper = styled.section`
  grid-column: 2/3;
  grid-row: 2/-1;
  padding: ${({ theme }) => theme.spacing.l};
`;

const StyledList = styled.ul`
  background: #fff;
  list-style: none;
  max-width: 840px;
  padding: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.primary};
  overflow-y: scroll;
  height: 70vh;
`;

const StyledItem = styled.li`
  border-bottom: 1px solid #dfe2e8;
  //padding: ${({ theme }) => theme.spacing.m} 0;
  padding: 10px 0;
`;

const GridWrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, 1.6rem);
  grid-gap: 10px;
`;

interface GradeProps {
  average: number;
}

const StyledGrade = styled.div<GradeProps>`
  grid-row: 1/-1;
  grid-column: 1/2;
  align-self: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background: ${({ theme, average }) => {
    if (average >= 4) {
      return theme.colors.green;
    }
    if (average >= 3) {
      return theme.colors.yellow;
    }
    if (average > 1) {
      return theme.colors.red;
    }
    return theme.colors.primary;
  }};
  display: grid;
  place-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  color: white;
`;

const StyledName = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  margin-left: 1em;
`;
const StyledAttendance = styled.small`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-left: 1em;
`;

const StyledDeleteButton = styled.button`
  grid-column: 3/4;
  grid-row: 1/2;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: #c0c7d6;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StudentsSection = () => {
  const { isLoading, error, data } = useGetStudentsByGroup('A');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(data);
    return <h1>Sorry, but we couldn't load data for you</h1>;
  }

  const students = data?.data.students;

  return (
    <Wrapper>
      <p>Students list</p>
      <StyledList>
        {students?.map((student: Student) => (
          <StyledItem key={student.lastName + student.firstName}>
            <GridWrapper>
              <StyledGrade average={student.average}>
                {student.average}
              </StyledGrade>
              <StyledName>
                {student.lastName} {student.firstName}
              </StyledName>
              <StyledAttendance>
                attendance: {student.attendance}%
              </StyledAttendance>
              <StyledDeleteButton>X</StyledDeleteButton>
            </GridWrapper>
          </StyledItem>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default StudentsSection;
