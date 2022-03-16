import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: grid;
  place-items: center;
  padding: 7px 25px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  border-radius: 96.94px;
  color: #737c8e;
  background: #eceff7;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Button: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
