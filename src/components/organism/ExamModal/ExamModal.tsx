import React from 'react';

import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
  activeExam: string | null;
}

const GroupModal = ({ isOpen, closeModal, activeExam }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modify Exam"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      <div>EXAM YOO</div>
      <div>{activeExam}</div>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default GroupModal;
