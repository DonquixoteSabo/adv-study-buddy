import React, { useContext } from 'react';
import StudentButton from '../StudentButton/StudentButton';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import styled from 'styled-components';
import { StudentsContext } from '../../../helpers/StudentsContext';

export const Wrapper = styled.div`
  display: flex;

  div {
    margin-left: 0.5em;
  }
`;


const ModalIcons = () => {
  const { closeStudentModal } = useContext(StudentsContext);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ModalIcons;