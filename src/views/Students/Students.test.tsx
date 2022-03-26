import React from 'react';
import Modal from 'react-modal';
import { fireEvent, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Students from './Students';

import { ENDPOINT } from 'hooks/useGetStudentsByGroup';
import { query, ENDPOINT as DATOCMS } from 'hooks/useArticles';
import TestAppProviders from 'helpers/TestAppProviders';

const mock = new MockAdapter(axios);

describe('Students Section', () => {
  beforeEach(() => {
    //Mock groups
    mock.onGet('http://localhost:5000/groups/getGroups').reply(200, {
      groups: ['A', 'B', 'C', 'D'],
    });
    //Mock empty students
    mock.onGet('http://localhost:5000/students/null').reply(200, {
      students: [],
    });
    // Mock empty searchbar
    mock.onGet('http://localhost:5000/students/search/').reply(200, {
      students: [],
    });
    //Mock articles
    mock.onPost(DATOCMS, { query }).reply(200, {
      data: {
        allArticles: [],
      },
    });
    // Mock students list
    mock.onGet(ENDPOINT + 'undefined').reply(200, {
      students: [],
    });
    // render modal container (index.html on production)
    Modal.setAppElement(document.createElement('div'));
  });

  afterEach(() => {
    mock.reset();
  });

  it('renders group modal on click and selects group', async () => {
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

  it('renders students modal on list click and closes modal', async () => {
    //Mock students list
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
    // Mock student 123 details
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

  it('opens modal after searchbar click', async () => {
    //Mock searchbar
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
    // Mock Doe2 details (Modal)
    mock.onGet('http://localhost:5000/students/456').reply(200, {
      students: [
        {
          id: { $oid: '456' },
          firstName: 'John',
          lastName: 'Doe2',
          attendance: 50,
          average: 5,
          group: 'B',
          course: 'Math',
          grades: [
            {
              subject: 'Science',
              average: 2,
            },
            {
              subject: 'English',
              average: 3,
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

    fireEvent.change(screen.getByPlaceholderText(/find student/i), {
      target: { value: 'John' },
    });

    // Open Modal
    expect(await screen.findByText(/Doe2/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Doe2/i));
    expect(await screen.findByText(/Math/i)).toBeInTheDocument();
  });
});
