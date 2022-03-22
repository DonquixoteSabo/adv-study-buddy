import React, { useContext } from 'react';

import GradeList from 'components/molecules/GradeList/GradeList';
import StudentModalHeader from 'components/molecules/StudentModalHeader/StudentModalHeader';

import { useGetStudentDetails } from 'hooks/UseGetStudentDetails';
import { StudentsContext } from 'helpers/StudentsContext';
import { StyledModal, Wrapper } from './StudentModal.styles';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const StudentModal = ({ isOpen, closeModal }: Props) => {
  const { activeStudent } = useContext(StudentsContext);
  const { isLoading, error, data } = useGetStudentDetails(activeStudent!);

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
        data.data.students.map(
          ({ firstName, lastName, average, course, grades }) => (
            <Wrapper key={firstName + lastName}>
              <StudentModalHeader
                average={average}
                firstName={firstName}
                lastName={lastName}
              />
              <GradeList grades={grades} course={course} />
            </Wrapper>
          )
        )
      ) : null}
    </StyledModal>
  );
};

export default StudentModal;
