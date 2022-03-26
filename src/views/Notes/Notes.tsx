import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
import NotesList from '../../components/molecules/NotesList/NotesList';
import NotesForm from '../../components/molecules/NotesForm/NotesForm';

export const Wrapper = styled.section`
  grid-column: 2/3;
  grid-row: 2/-1;
  padding: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.primary};

  header h1 {
    font-size: ${({ theme }) => theme.fontSize.xl2};
    font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-weight: 700;
    margin: 1em 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    width: 340px;
  }
`;

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
