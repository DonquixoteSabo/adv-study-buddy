import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: #c0c7d6;
  color: white;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const DeleteButton = () => (
  <Wrapper>
    <ImCancelCircle />
  </Wrapper>
);

export default DeleteButton;
