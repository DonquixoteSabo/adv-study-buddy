import React from 'react';
import { useParams } from 'react-router-dom';

import StudentsList from 'components/organism/StudentsList/StudentsList';
import Button from 'components/atoms/Button/Button';

import { Wrapper, Header } from './StudentsSection.styles';

const StudentsSection = () => {
  const { group } = useParams();

  return (
    <Wrapper>
      <div className="row">
        <Header>Group {group?.toUpperCase()}</Header>
        <Button>change group {'>'}</Button>
      </div>
      <StudentsList group="A" />
    </Wrapper>
  );
};

export default StudentsSection;
