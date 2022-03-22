import React from 'react';
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
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const StudentButton: React.FC = ({ children }, props) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default StudentButton;
