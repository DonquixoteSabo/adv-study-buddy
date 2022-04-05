import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Combobox } from '@reach/combobox';

import SearchResults from './SearchResults';

import TestAppProviders from 'helpers/TestAppProviders';

const mock = new MockAdapter(axios);

describe('SearchResults', () => {
  afterEach(() => {
    mock.reset();
  });

  it('renders students that match given props', async () => {
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
        <Combobox>
          <SearchResults results="John" />
        </Combobox>
      </TestAppProviders>
    );

    await screen.findByText(/Doe1/i);
    await screen.findByText(/Doe2/i);
  });
});
