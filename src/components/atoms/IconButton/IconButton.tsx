import React from 'react';
import styled from 'styled-components';

interface IProps {
  isSmall: boolean;
}

const Wrapper = styled.button<IProps>`
  width: ${({ isSmall }) => (isSmall ? '24px' : '30px')};
  height: ${({ isSmall }) => (isSmall ? '24px' : '30px')};
  border-radius: 50%;
  border: none;
  background: #c0c7d6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

interface Props {
  isSmall?: boolean;
  children: any;
  onClick?: () => void;
}

const IconButton = ({ children, isSmall, onClick }: Props) => (
  <Wrapper isSmall={isSmall || false} onClick={onClick}>
    {children}
  </Wrapper>
);

export default IconButton;
