import React from 'react';

import StudentsList from 'components/organism/StudentsList/StudentsList';

import { Wrapper, Header } from './StudentsSection.styles';
import { useParams } from 'react-router-dom';

const StudentsSection = () => {
  const { group } = useParams();

  return (
    <Wrapper>
      <Header>Group {group?.toUpperCase()}</Header>
      <StudentsList group="A" />
    </Wrapper>
  );
};

export default StudentsSection;
