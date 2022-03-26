import React from 'react';
import styled from 'styled-components';
import IconButton from '../../atoms/IconButton/IconButton';
import { AiOutlineDelete } from 'react-icons/ai';

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

interface Note {
  id: string;
  title: string;
  content: string;
}

const notes: Note[] = [
  {
    id: '1',
    title: 'My personal note',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.',
  },
  {
    id: '2',
    title: 'My personal note',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.',
  },
  {
    id: '3',
    title: 'My personal note',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.',
  },
];

const NotesList = () => {
  return (
    <List>
      {notes.map(({ id, title, content }) => (
        <NotesItem key={id}>
          <div>
            <IconButton isSmall>
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
