import React, { useContext } from 'react';
import IconButton from '../IconButton/IconButton';
import { AiOutlineFileAdd, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { StudentsContext } from 'helpers/StudentsContext';
import { ImCancelCircle } from 'react-icons/im';

const Wrapper = styled.div`
  display: flex;

  div {
    margin-left: 0.5em;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xl2};
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const ModalIcons = () => {
  const { closeStudentModal } = useContext(StudentsContext);

  return (
    <>
      <CloseButton
        onClick={closeStudentModal}
        data-testid="close student modal"
      >
        <AiOutlineClose />
      </CloseButton>
      <Wrapper>
        <div>
          <IconButton>
            <AiOutlineFileAdd />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ImCancelCircle />
          </IconButton>
        </div>
      </Wrapper>
    </>
  );
};

export default ModalIcons;
