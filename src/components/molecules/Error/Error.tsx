import React, { useContext } from 'react';
import styled from 'styled-components';

import { ErrorContext } from 'helpers/ErrorContext';

interface Props {
  title?: string;
  msg?: string;
}

interface ErrorProps {
  error: boolean;
}

export const Wrapper = styled.div<ErrorProps>`
  padding: ${({ theme }) => theme.spacing.m};
  border: 3px solid #ff8383;
  border-radius: 15px;
  position: absolute;
  bottom: 10%;
  background: white;
  transition: 1s ease-in-out;
  transform: translateX(-50%);
  left: ${({ error }) => (error ? '50%' : '-200%')};
  z-index: 10;

  header {
    font-weight: 700;
    font-size: 20px;
  }

  color: #ff8383;
  font-family: ${({ theme }) => theme.fontFamily.roboto};
`;

export const Background = styled.div<ErrorProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(115, 124, 142, 0.1);
  z-index: ${({ error }) => (error ? '5' : '-20')};
`;

const Error = ({
  title = 'Oops!',
  msg = 'Something went wrong. Please refresh the page, or contact our support',
}: Props) => {
  const { error } = useContext(ErrorContext);
  return (
    <>
      <Background error={!!error} />
      <Wrapper error={!!error}>
        <header>{title}</header>
        <p>{msg}</p>
      </Wrapper>
    </>
  );
};

export default Error;
