import React from 'react';

import { Wrapper, Message, Circle } from './Loading.styles';

const Loading = () => {
  return (
    <Wrapper>
      <Message>Loading...</Message>
      <Circle />
    </Wrapper>
  );
};

export default Loading;
