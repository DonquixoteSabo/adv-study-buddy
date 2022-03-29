import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import NotesList from 'components/organism/NotesList/NotesList';
import NotesForm from 'components/molecules/NotesForm/NotesForm';

import { Wrapper, Row } from './Notes.styles';

const Notes = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <header>
          <h1>Settings</h1>
        </header>
        <Row>
          <NotesForm />
          <NotesList />
        </Row>
      </Wrapper>
    </MainTemplate>
  );
};

export default Notes;
