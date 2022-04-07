import React from 'react';

import NotesListItem from 'components/molecules/NotesListItem/NotesListItem';
import Loading from 'components/molecules/Loading/Loading';

import { useNotes } from 'hooks/useNotes';

import { List } from './NotesList.styles';

const NotesList = () => {
  const { data, error, isLoading } = useNotes();

  if (error) {
    return <h4>Error...</h4>;
  }

  return (
    <List>
      {isLoading ? <Loading /> : (
        data?.data.allNotes.map(({ _id, title, content }) => (
          <NotesListItem _id={_id} title={title} content={content} key={_id} />
        ))
      )}
    </List>
  );
};

export default NotesList;
