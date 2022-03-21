import React, { useContext } from 'react';

import Modal from 'react-modal';

import styled from 'styled-components';
import { useGetStudentDetails } from 'hooks/UseGetStudentDetails';
import { StudentsContext } from 'helpers/StudentsContext';
import Grade from 'components/atoms/Grade/Grade';
import StudentButton from 'components/atoms/StudentButton/StudentButton';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineFileAdd } from 'react-icons/ai';

export const StyledModal = styled(Modal)`
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

export const Wrapper = styled.div`
  padding: 3em 3em;

  h4 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 1.5em 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3em;
`;

export const Icons = styled.div`
  display: flex;

  div {
    margin-left: 0.5em;
  }
`;

export const Name = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: ${({ theme }) => theme.letterSpacing.sm};
  margin: 0 ${({ theme }) => theme.spacing.l};
`;

export const GradeList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-right: 1em;
  }
`;

interface Props {
  isOpen: boolean;
  closeModal?: () => void;
}

const StudentModal = ({ isOpen, closeModal }: Props) => {
  const { activeStudent, closeStudentModal } = useContext(StudentsContext);
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
        data.data.students.map((student) => (
          <Wrapper>
            <Row>
              <Grade average={student.average} isBig />
              <Name>
                {student.lastName} {student.firstName}
              </Name>
              <Icons>
                <div>
                  <StudentButton>
                    <AiOutlineFileAdd />
                  </StudentButton>
                </div>
                <div onClick={closeStudentModal}>
                  <StudentButton>
                    <ImCancelCircle />
                  </StudentButton>
                </div>
              </Icons>
            </Row>
            <div>
              <h4>Course:</h4>
              {student.course}
              <h4>Average grades:</h4>
              <GradeList>
                {student.grades.map((grade) => (
                  <li>
                    <p>{grade.subject}</p> <Grade average={grade.average} />
                  </li>
                ))}
              </GradeList>
            </div>
          </Wrapper>
        ))
      ) : null}
    </StyledModal>
  );
};

export default StudentModal;
