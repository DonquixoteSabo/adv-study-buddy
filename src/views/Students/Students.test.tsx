import React from 'react';
import Modal from 'react-modal';
import { fireEvent, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Students from './Students';
import { ENDPOINT } from 'hooks/useGetStudentsByGroup';
import TestAppProviders from 'helpers/TestAppProviders';
import { query, ENDPOINT as DATOCMS } from 'hooks/useArticles';

const mock = new MockAdapter(axios);

describe('Students Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('renders modal on Click', async () => {
    Modal.setAppElement(document.createElement('div'));

    mock.onGet('http://localhost:5000/groups/getGroups').reply(200, {
      groups: ['A', 'B', 'C', 'D'],
    });

    mock.onPost(DATOCMS, { query }).reply(200, {
      data: {
        allArticles: [],
      },
    });

    mock.onGet(ENDPOINT + 'undefined').reply(200, {
      students: [],
    });

    render(
      <TestAppProviders>
        <Students />
      </TestAppProviders>
    );

    fireEvent.click(await screen.findByText(/change group/i));

    expect(await screen.findByText('Select a group')).toBeInTheDocument();
    expect(await screen.findByText('A')).toBeInTheDocument();
    expect(await screen.findByText('D')).toBeInTheDocument();
  });
});
