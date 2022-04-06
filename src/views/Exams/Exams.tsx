import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ExamTemplate from 'components/templates/ExamTemplate/ExamTemplate';

import ExamContextProvider from 'helpers/ExamContext';

const Exams = () => {
  return (
    <ExamContextProvider>
      <MainTemplate>
        <ExamTemplate />
      </MainTemplate>
    </ExamContextProvider>
  );
};

export default Exams;
