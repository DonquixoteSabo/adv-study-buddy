import React from 'react';

import { useNotes } from 'hooks/useNotes';

import { List } from './NotesList.styles';
import NotesListItem from '../../molecules/NotesListItem/NotesListItem';

const NotesList = () => {
  const { data, isLoading, error } = useNotes();

  if (error) {
    return <h4>Error...</h4>;
  }
  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <List>
      {data?.data.allNotes.map(({ _id, title, content }) => (
        <NotesListItem _id={_id} title={title} content={content} key={_id} />
      ))}
    </List>
  );
};

export default NotesList;
