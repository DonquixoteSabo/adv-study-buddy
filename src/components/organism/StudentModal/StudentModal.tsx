import React from 'react';

import Modal from 'react-modal';

import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  width: 300px;
  padding: 25px 0;
  background: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.header``;

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const StudentModal = ({ isOpen, closeModal }: Props) => {
  // const { isLoading, error, data } = useGetAllGroups();

  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel="Select group"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      {/*<Header>Select a group</Header>*/}
      {/*{error ? (*/}
      {/*  <h4>Error</h4>*/}
      {/*) : isLoading ? (*/}
      {/*  <h4>Loading...</h4>*/}
      {/*) : (*/}
      {/*  <div>SIEMAAA</div>*/}
      {/*)}*/}
      <h1>Student Modal</h1>
    </StyledModal>
  );
};

export default StudentModal;
