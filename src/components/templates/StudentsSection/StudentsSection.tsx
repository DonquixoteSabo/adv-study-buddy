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

const StyledGrade = styled.div``;

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
            <StyledGrade>{student.average}</StyledGrade>
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
