import React from 'react';

import ExamModalHeader from 'components/molecules/ExamModalHeader/ExamModalHeader';

import { useClasses } from 'hooks/useClasses';

import { StyledModal, StyledButton } from './ExamModal.styles';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
  activeExam: string | null;
}

const ExamModal = ({ isOpen, closeModal, activeExam }: Props) => {
  const { data, error } = useClasses();

  if (error) {
    console.log(error);
    return <h4>Sorry, but we couldn't load data for you</h4>;
  }

  const matchingClass = data?.data?.allExams.find(
    (exam) => exam._id === activeExam
  );

  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel="Modify Exam"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      {matchingClass ? (
        <>
          <ExamModalHeader {...matchingClass} />
          <h4>Description:</h4>
          {matchingClass.content}
          <StyledButton onClick={closeModal} style={{ width: 100 }}>
            close
          </StyledButton>
        </>
      ) : (
        <h4>Something went wrong. Please close and open again this modal</h4>
      )}
    </StyledModal>
  );
};

export default ExamModal;
