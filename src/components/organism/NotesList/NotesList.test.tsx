import React from 'react';
import { render, screen } from '@testing-library/react';

import NotesList from './NotesList';

import TestAppProviders from 'helpers/TestAppProviders';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);

let allNotes = [
  {
    _id: '1',
    title: 'Dashboard todo',
    content: 'Add new MongoDB schemaHandle',
  },
  { _id: '2', title: 'Exams', content: 'Add exams endpoints' },
  { _id: '3', title: 'News', content: 'Add new subpage' },
];

const ENDPOINT = 'http://localhost:5000/notes/';

describe('NotesList', () => {
  beforeEach(() => {
    console.error = jest.fn();
    mock.onPost().reply(500);
  });
  afterEach(() => {
    mock.reset();
  });

  it('displays error', async () => {
    mock.onGet(ENDPOINT).networkErrorOnce();
    render(
      <TestAppProviders>
        <NotesList />
      </TestAppProviders>
    );
    await screen.findByText(/Error/i);
  });

  it('displays loading spinner', async () => {
    mock.onGet(ENDPOINT).timeout();
    render(
      <TestAppProviders>
        <NotesList />
      </TestAppProviders>
    );
    await screen.findByText(/Loading/i);
  });

  it('displays notes', async () => {
    mock.onGet(ENDPOINT).reply(200, {
      allNotes,
    });
    render(
      <TestAppProviders>
        <NotesList />
      </TestAppProviders>
    );

    await screen.findByText(/Dashboard todo/i);
    await screen.findByText(/Add exams endpoints/i);
  });
});
