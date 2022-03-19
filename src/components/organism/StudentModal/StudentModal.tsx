import React, { useContext } from 'react';

import Modal from 'react-modal';

import styled from 'styled-components';
import { useGetStudentDetails } from 'hooks/UseGetStudentDetails';
import { StudentsContext } from 'helpers/StudentsContext';

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
  const { activeStudent } = useContext(StudentsContext);
  const { isLoading, error, data } = useGetStudentDetails(activeStudent!);
  console.log(data);
  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel="Student details"
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: ' rgba(115, 124, 142, 0.4)' },
      }}
    >
      {error ? (
        <h4>Error</h4>
      ) : isLoading ? (
        <h4>Loading...</h4>
      ) : data ? (
        data.data.students.map((student) => student.firstName)
      ) : null}
    </StyledModal>
  );
};

export default StudentModal;
