import React, { useContext } from 'react';
import { ImCancelCircle } from 'react-icons/im';

import IconButton from 'components/atoms/IconButton/IconButton';

import { useDeleteClass } from 'hooks/classes/useDeleteClass';
import { Class } from 'hooks/classes/useClasses';
import { ExamContext } from 'helpers/ExamContext';

import { Wrapper, Time } from './ExamModalHeader.styles';

const ExamModalHeader = ({ date, hour, title, _id }: Class) => {
  const { mutate: deleteNote } = useDeleteClass();
  const { closeExamModal } = useContext(ExamContext);

  const handleDeleteClick = () => {
    if (closeExamModal) {
      closeExamModal();
    }
    deleteNote(_id);
  };

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
          onClick={handleDeleteClick}
          data-cy={`delete ${title} from modal`}
        >
          <ImCancelCircle className="icon" />
        </IconButton>
      </div>
    </Wrapper>
  );
};

export default ExamModalHeader;
