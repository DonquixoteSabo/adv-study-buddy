import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

import IconButton from 'components/atoms/IconButton/IconButton';

import { useDeleteNote } from 'hooks/notes/useDeleteNote';

import { Wrapper } from './NotesListItem.styles';

interface Props {
  _id: string;
  title: string;
  content: string;
}

const NotesListItem = ({ _id, title, content }: Props) => {
  const { mutate: deleteNote } = useDeleteNote();
  return (
    <Wrapper key={_id}>
      <div>
        <IconButton data-cy={title} isSmall onClick={() => deleteNote(_id)}>
          <AiOutlineDelete />
        </IconButton>
        <header>{title}</header>
      </div>
      <p>{content}</p>
    </Wrapper>
  );
};

export default NotesListItem;
