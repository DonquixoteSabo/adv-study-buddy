import React, { useContext } from 'react';

import ClassList from 'components/organism/ClassList/ClassList';
import ClassForm from 'components/organism/ClassForm/ClassForm';
import ExamModal from 'components/organism/ExamModal/ExamModal';

import { ExamContext } from 'helpers/ExamContext';

import { Wrapper, Row } from './ExamTemplate.styles';

const ExamTemplate = () => {
  const { isExamModalOpen, closeExamModal, activeExam } =
    useContext(ExamContext);
  return (
    <Wrapper>
      <ExamModal
        isOpen={isExamModalOpen}
        closeModal={closeExamModal}
        activeExam={activeExam}
      />
      <Row>
        <ClassList />
      </Row>
      <Row>
        <ClassForm />
      </Row>
    </Wrapper>
  );
};

export default ExamTemplate;
