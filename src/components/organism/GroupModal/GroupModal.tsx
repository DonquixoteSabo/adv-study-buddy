import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Wrapper = styled(Modal)`
  background: white;
  width: auto;
  height: auto;
`;

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const GroupModal = ({ isOpen, closeModal }: Props) => {
  return (
    <Wrapper isOpen={isOpen} contentLabel="Select group">
      <h1>Select a group</h1>A B C<button onClick={closeModal}>CLose</button>
    </Wrapper>
  );
};

export default GroupModal;
