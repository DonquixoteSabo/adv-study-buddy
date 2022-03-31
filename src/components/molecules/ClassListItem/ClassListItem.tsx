import React from 'react';
import { ImCancelCircle } from 'react-icons/im';

import IconButton from 'components/atoms/IconButton/IconButton';
import { Class } from 'components/organism/ClassList/ClassList';

import { Wrapper, Time } from './ClassListItem.styles';

const ClassListItem = ({ _id, title, data, hour }: Class) => {
  return (
    <Wrapper>
      <Time>
        <p className="date">{data}</p>
        <p>{hour}</p>
      </Time>
      <header>{title}</header>
      <IconButton isSmall>
        <ImCancelCircle className="icon" />
      </IconButton>
    </Wrapper>
  );
};

export default ClassListItem;
