import React from 'react';

import { useGetAllGroups } from 'hooks/useGetAllGroups';

import { StyledModal, Header, Item } from './GroupModal.styles';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const GroupModal = ({ isOpen, closeModal }: Props) => {
  const { isLoading, error, data } = useGetAllGroups();

  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel="Select group"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      <Header>Select a group</Header>
      {error ? (
        <h4>Error</h4>
      ) : isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {data?.data.groups.map((group) => (
            <Item key={group} to={`/students/${group}`} onClick={closeModal}>
              {group}
            </Item>
          ))}
        </div>
      )}
    </StyledModal>
  );
};

export default GroupModal;
