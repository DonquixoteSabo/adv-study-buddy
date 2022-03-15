import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  grid-column: 2/3;
  grid-row: 2/-1;
`;

const StudentsSection = () => {


  return (
    <Wrapper>
      <p>Students list</p>
    </Wrapper>
  );
};

export default StudentsSection;
