import React from 'react';
import Modal from 'react-modal';

import { useClasses } from 'hooks/useClasses';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
  activeExam: string | null;
}

const GroupModal = ({ isOpen, closeModal, activeExam }: Props) => {
  const { data, isLoading, error } = useClasses();

  if (error) {
    console.log(error);
    return <h4>Sorry, but we couldn't load data for you</h4>;
  }

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  const matchingClass = data?.data?.allExams.find(
    (exam) => exam._id === activeExam
  );

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modify Exam"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      {matchingClass ? (
        <>
          <div>EXAM YOO</div>
          <div>{matchingClass.title}</div>
          <button onClick={closeModal}>close</button>
        </>
      ) : (
        <h4>Something went wrong. Please close and open again this modal</h4>
      )}
    </Modal>
  );
};

export default GroupModal;
