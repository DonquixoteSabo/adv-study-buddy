import React from 'react';
import { ImCancelCircle } from 'react-icons/im';

import IconButton from 'components/atoms/IconButton/IconButton';

import { Class } from 'hooks/useClasses';
import { useDeleteClass } from 'hooks/useDeleteClass';

import { Wrapper, Time } from './ClassListItem.styles';

const ClassListItem = ({ _id, title, date, hour }: Class) => {
  const { mutate: deleteNote } = useDeleteClass();

  return (
    <Wrapper>
      <Time>
        <p className="date">{date.prettyDate}</p>
        <p>{hour}</p>
      </Time>
      <header>{title}</header>
      <IconButton isSmall onClick={() => deleteNote(_id)}>
        <ImCancelCircle className="icon" />
      </IconButton>
    </Wrapper>
  );
};

export default ClassListItem;
