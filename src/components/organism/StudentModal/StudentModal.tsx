import React, { useContext } from 'react';

import GradeList from 'components/molecules/GradeList/GradeList';
import StudentModalHeader from 'components/molecules/StudentModalHeader/StudentModalHeader';
import Loading from 'components/molecules/Loading/Loading';

import { useStudentDetails } from 'hooks/students/UseStudentDetails';
import { StudentsContext } from 'helpers/StudentsContext';

import { StyledModal, Wrapper } from './StudentModal.styles';

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const StudentModal = ({ isOpen, closeModal }: Props) => {
  const { activeStudent } = useContext(StudentsContext);
  const { error, data, isLoading } = useStudentDetails(activeStudent!);

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
        <Loading />
      ) : data ? (
        <Wrapper
          key={data.data.students.firstName + data.data.students.lastName}
        >
          <StudentModalHeader
            average={data.data.students.average}
            firstName={data.data.students.firstName}
            lastName={data.data.students.lastName}
          />
          <GradeList
            grades={data.data.students.grades}
            course={data.data.students.course}
          />
        </Wrapper>
      ) : null}
    </StyledModal>
  );
};

export default StudentModal;
