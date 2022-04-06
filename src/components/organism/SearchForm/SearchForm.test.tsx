import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchForm from './SearchForm';

import TestAppProviders from 'helpers/TestAppProviders';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const mock = new MockAdapter(axios);

describe('SearchForm', () => {
  beforeEach(() => {
    mock.onGet('http://localhost:5000/students/search/').reply(200, {
      students: [],
    });
  });

  afterEach(() => {
    mock.reset();
  });

  it('changes input value and renders students', async () => {
    mock.onGet('http://localhost:5000/students/search/John').reply(200, {
      students: [
        {
          id: { $oid: '123' },
          firstName: 'John',
          lastName: 'Doe1',
        },
        {
          id: { $oid: '456' },
          firstName: 'John',
          lastName: 'Doe2',
        },
      ],
    });

    render(
      <TestAppProviders>
        <SearchForm />
      </TestAppProviders>
    );

    const input = screen.getByPlaceholderText('find student');

    userEvent.type(input, 'John');

    expect(input).toBeInTheDocument();
    screen.getByDisplayValue('John');
    await screen.findByText(/Doe1/i);
    await screen.findByText(/Doe2/i);
  });
});
