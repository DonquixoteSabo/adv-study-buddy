import React, { useContext } from 'react';

import { ErrorContext } from 'helpers/ErrorContext';

import { Wrapper } from './Error.styles';

interface Props {
  title?: string;
  msg?: string;
}

const Error = ({
  title = 'Oops!',
  msg = 'Something went wrong. Please refresh the page, or contact our support',
}: Props) => {
  const { error } = useContext(ErrorContext);
  return (
    <Wrapper error={!!error}>
      <header>{title}</header>
      <p>{msg}</p>
    </Wrapper>
  );
};

export default Error;
