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
`;

const StyledItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, 1.6rem);
`;

interface GradeProps {
  average: number;
}

const StyledGrade = styled.div<GradeProps>`
  grid-row: 1/-1;
  grid-column: 1/2;
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

const StyledName = styled.p``;
const StyledAttendance = styled.small``;
const StyledDeleteButton = styled.button``;
const StudentsSection = () => {
  const { isLoading, error, data } = useGetStudentsByGroup('A');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(data);
    return <h1>Sorry, but we couldn't load data for you</h1>;
  }

  console.log(data);

  return (
    <Wrapper>
      <p>Students list</p>
      <StyledList>
        {data!.map((student: Student) => (
          <StyledItem key={student.lastName + student.firstName}>
            <StyledGrade average={student.average}>
              {student.average}
            </StyledGrade>
            <StyledName>
              {student.lastName} {student.firstName}
            </StyledName>
            <StyledAttendance>{student.attendance}</StyledAttendance>
            <StyledDeleteButton>X</StyledDeleteButton>
          </StyledItem>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default StudentsSection;
