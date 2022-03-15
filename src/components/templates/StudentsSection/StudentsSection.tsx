import React from 'react';
import styled from 'styled-components';
import { useGetStudentsByGroup } from 'hooks/useGetStudentsByGroup';

const Wrapper = styled.section`
  grid-column: 2/3;
  grid-row: 2/-1;
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

  console.log(data);
 
  return (
    <Wrapper>
      <p>Students list</p>
    </Wrapper>
  );
};

export default StudentsSection;
