import React from 'react';
import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

import IconButton from 'components/atoms/IconButton/IconButton';

import { useNotes } from 'hooks/useNotes';
import { useDeleteNote } from 'hooks/useDeleteNote';

export const List = styled.ul`
  max-width: 300px;
  padding: 0;
  margin: 0 1em;
  list-style: none;
  max-height: 600px;
  overflow-y: scroll;
`;

export const NotesItem = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.s};

  div {
    display: flex;
    align-items: center;
  }

  header {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-left: 8px;
  }
`;

const NotesList = () => {
  const { data, isLoading, error } = useNotes();
  const { mutate: deleteNote } = useDeleteNote();

  if (error) {
    return <h4>Error...</h4>;
  }
  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <List>
      {data?.data.allNotes.map(({ _id, title, content }) => (
        <NotesItem key={_id}>
          <div>
            <IconButton isSmall onClick={() => deleteNote(_id)}>
              <AiOutlineDelete />
            </IconButton>
            <header>{title}</header>
          </div>
          <p>{content}</p>
        </NotesItem>
      ))}
    </List>
  );
};

export default NotesList;
