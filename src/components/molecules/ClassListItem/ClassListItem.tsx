import React, { useContext } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { RiPencilFill } from 'react-icons/ri';

import IconButton from 'components/atoms/IconButton/IconButton';

import { Class } from 'hooks/useClasses';
import { useDeleteClass } from 'hooks/useDeleteClass';
import { ExamContext } from 'helpers/ExamContext';

import { Wrapper, Time } from './ClassListItem.styles';

const ClassListItem = ({ _id, title, date, hour }: Class) => {
  const { mutate: deleteNote } = useDeleteClass();
  const { openExamModal } = useContext(ExamContext);

  return (
    <Wrapper>
      <Time>
        <p className="date">{date.prettyDate}</p>
        <p>{hour}</p>
      </Time>
      <header>{title}</header>
      <div className="icon-wrapper">
        <IconButton
          isSmall
          onClick={() => openExamModal && openExamModal(_id)}
          data-cy={`open ${title}`}
        >
          <RiPencilFill className="icon" />
        </IconButton>
        <IconButton
          isSmall
          onClick={() => deleteNote(_id)}
          data-cy={`delete ${title}`}
        >
          <ImCancelCircle className="icon" />
        </IconButton>
      </div>
    </Wrapper>
  );
};

export default ClassListItem;
