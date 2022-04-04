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

describe('NotesList', () => {
  beforeEach(() => {
    console.error = jest.fn();
    mock.onPost().reply(500);
  });
  afterEach(() => {
    mock.reset();
  });

  it('displays error', async () => {
    mock.onGet('http://localhost:5000/notes/').networkErrorOnce();
    render(
      <TestAppProviders>
        <NotesList />
      </TestAppProviders>
    );
    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });

  it('displays loading spinner', async () => {
    mock.onGet('http://localhost:5000/notes/').timeout();
    render(
      <TestAppProviders>
        <NotesList />
      </TestAppProviders>
    );
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
  });

  it('displays notes', async () => {
    mock.onGet('http://localhost:5000/notes/').reply(200, {
      allNotes,
    });
    render(
      <TestAppProviders>
        <NotesList />
      </TestAppProviders>
    );

    expect(await screen.findByText(/Dashboard todo/i)).toBeInTheDocument();
    expect(await screen.findByText(/Add exams endpoints/i)).toBeInTheDocument();
  });
});
