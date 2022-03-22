import React from 'react';
import Modal from 'react-modal';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Students from './Students';
import { ENDPOINT } from 'hooks/useGetStudentsByGroup';
import TestAppProviders from 'helpers/TestAppProviders';
import { query, ENDPOINT as DATOCMS } from 'hooks/useArticles';

const mock = new MockAdapter(axios);

describe('Students Section', () => {
  beforeEach(() => {
    mock.onGet('http://localhost:5000/groups/getGroups').reply(200, {
      groups: ['A', 'B', 'C', 'D'],
    });

    mock.onGet('http://localhost:5000/students/null').reply(200, {
      students: [],
    });

    mock.onPost(DATOCMS, { query }).reply(200, {
      data: {
        allArticles: [],
      },
    });
  });

  afterEach(() => {
    mock.reset();
  });

  it('renders group modal on Click and close modal', async () => {
    Modal.setAppElement(document.createElement('div'));

    mock.onGet(ENDPOINT + 'undefined').reply(200, {
      students: [],
    });

    render(
      <TestAppProviders>
        <Students />
      </TestAppProviders>
    );

    //Open modal
    fireEvent.click(screen.getByText(/change group/i));
    expect(await screen.findByText('Select a group')).toBeInTheDocument();
    expect(await screen.findByText('A')).toBeInTheDocument();
    expect(await screen.findByText('D')).toBeInTheDocument();
    // Close Modal
    fireEvent.click(screen.getByText('D'));
    expect(screen.queryByText('Select a group')).not.toBeInTheDocument();
  });
  it('renders Student modal on Click and close Modal', async () => {
    Modal.setAppElement(document.createElement('div'));

    mock.onGet(ENDPOINT + 'undefined').reply(200, {
      students: [
        {
          id: { $oid: '123' },
          firstName: 'John',
          lastName: 'Doe',
          attendance: 30,
          average: 3,
          group: 'A',
          course: 'Business academy',
        },
      ],
    });

    mock.onGet('http://localhost:5000/students/123').reply(200, {
      students: [
        {
          id: { $oid: '123' },
          firstName: 'John',
          lastName: 'Doe',
          attendance: 30,
          average: 3,
          group: 'A',
          course: 'Business academy',
          grades: [
            {
              subject: 'Philology',
              average: 3,
            },
            {
              subject: 'Academic speech',
              average: 5,
            },
          ],
        },
      ],
    });

    render(
      <TestAppProviders>
        <Students />
      </TestAppProviders>
    );

    // Open Modal
    expect(await screen.findByText(/Doe John/i)).toBeInTheDocument();
    expect(screen.queryByText(/Average grades:/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/Doe John/i));
    expect(await screen.findByText(/Average grades:/i)).toBeInTheDocument();
    expect(await screen.findByText(/Philology/i)).toBeInTheDocument();

    // Close Modal
    fireEvent.click(screen.getByTestId('close student modal'));
    expect(screen.queryByText(/Average grades:/i)).not.toBeInTheDocument();
  });
});
