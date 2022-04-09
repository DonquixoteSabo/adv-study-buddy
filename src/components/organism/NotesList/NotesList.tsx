import React, { useContext } from 'react';

import NotesListItem from 'components/molecules/NotesListItem/NotesListItem';
import Loading from 'components/molecules/Loading/Loading';

import { useNotes } from 'hooks/useNotes';
import { ErrorContext } from 'helpers/ErrorContext';

import { List } from './NotesList.styles';

const NotesList = () => {
  const { data, error, isLoading } = useNotes();
  const { addError } = useContext(ErrorContext);

  if (error) {
    addError('NotesList error');
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
