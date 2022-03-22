import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, screen } from '@testing-library/react';
import StudentsList from './StudentsList';
import { ENDPOINT } from '../../../hooks/useGetStudentsByGroup';
import TestAppProviders from '../../../helpers/TestAppProviders';

const mock = new MockAdapter(axios);

describe('StudentsList', () => {
  afterEach(() => {
    mock.reset();
  });
  it('renders Loading spinner', () => {
    //Disable error messages
    console.error = jest.fn();
    console.log = jest.fn();

    mock.onGet(ENDPOINT + 'A').timeoutOnce();

    render(
      <TestAppProviders>
        <StudentsList group="A" />
      </TestAppProviders>
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders error message', async () => {
    mock.onGet(ENDPOINT + 'A').networkError();

    render(
      <TestAppProviders>
        <StudentsList group="A" />
      </TestAppProviders>
    );
    expect(await screen.findByText(/Sorry/i)).toBeInTheDocument();
  });

  it('renders Students', async () => {
    mock.onGet(ENDPOINT + 'A').reply(200, {
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
        <StudentsList group="A" />
      </TestAppProviders>
    );
    expect(await screen.findByText(/Doe John/i)).toBeInTheDocument();
    expect(screen.queryByText(/Academic speech/i)).not.toBeInTheDocument();
  });
});
