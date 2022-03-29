import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/-1;
`;

const Exams = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <h1>Exams</h1>
      </Wrapper>
    </MainTemplate>
  );
};

export default Exams;
