import React from 'react';

import { Circle } from 'components/molecules/Loading/Loading.styles';

import { useGetAllGroups } from 'hooks/useGetAllGroups';

import { StyledModal, Header, Item } from './GroupModal.styles';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const GroupModal = ({ isOpen, closeModal }: Props) => {
  const { error, data, isLoading } = useGetAllGroups();

  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel="Select group"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
      isLoading={isLoading}
    >
      <Header>Select a group</Header>
      {error ? (
        <h4>Error</h4>
      ) : isLoading ? (
        <Circle />
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
