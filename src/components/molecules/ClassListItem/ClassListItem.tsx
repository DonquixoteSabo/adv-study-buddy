import React from 'react';
import { ImCancelCircle } from 'react-icons/im';

import IconButton from 'components/atoms/IconButton/IconButton';

import { Class } from 'hooks/useClasses';

import { Wrapper, Time } from './ClassListItem.styles';

const ClassListItem = ({ _id, title, date, hour }: Class) => {
  return (
    <Wrapper>
      <Time>
        <p className="date">{date.prettyDate}</p>
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
