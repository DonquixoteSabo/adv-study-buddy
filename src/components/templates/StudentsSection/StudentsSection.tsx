import React from 'react';

import StudentsList from 'components/organism/StudentsList/StudentsList';

import { Wrapper } from './StudentsSection.styles';

const StudentsSection = () => {
  return (
    <Wrapper>
      <p>Students list</p>
      <StudentsList group="A" />
    </Wrapper>
  );
};

export default StudentsSection;
