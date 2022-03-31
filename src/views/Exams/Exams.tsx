import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ClassList from 'components/organism/ClassList/ClassList';

import { Wrapper, Row } from './Exams.styles';

const Exams = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Row>
          <ClassList />
        </Row>
        <Row>
          <form action=""></form>
        </Row>
      </Wrapper>
    </MainTemplate>
  );
};

export default Exams;
