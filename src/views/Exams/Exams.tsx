import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ClassList from 'components/organism/ClassList/ClassList';
import ClassForm from 'components/organism/ClassForm/ClassForm';

import { Wrapper, Row } from './Exams.styles';

const Exams = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Row>
          <ClassList />
        </Row>
        <Row>
          <ClassForm />
        </Row>
      </Wrapper>
    </MainTemplate>
  );
};

export default Exams;
