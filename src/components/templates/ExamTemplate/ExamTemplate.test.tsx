import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Modal from 'react-modal';

import ExamTemplate from './ExamTemplate';

import TestAppProviders from 'helpers/TestAppProviders';
import ExamContextProvider from 'helpers/ExamContext';
import { Class } from 'hooks/useClasses';

const mock = new MockAdapter(axios);

const allExams: Class[] = [
  {
    title: 'Biology',
    content: 'Evolution',
    date: { unixDate: 1648977272, prettyDate: '03/04' },
    _id: '1',
    hour: '8.00',
  },
  {
    title: 'Physics',
    content: 'Theory of relativity',
    date: { unixDate: 1648804472, prettyDate: '01/04' },
    _id: '2',
    hour: '10.00',
  },
];

const ENDPOINT = 'http://localhost:5000/exams/';

describe('ExamTemplate', () => {
  afterEach(() => {
    mock.reset();
  });
 
  it('displays an error', async () => {
    // disable error msg
    console.log = jest.fn();
    console.error = jest.fn();

    mock.onGet(ENDPOINT).networkError();
    render(
      <TestAppProviders>
        <ExamTemplate />
      </TestAppProviders>
    );
    await screen.findAllByText(/Sorry/i);
  });

  it('displays classes', async () => {
    mock.onGet(ENDPOINT).reply(200, {
      allExams,
    });

    render(
      <TestAppProviders>
        <ExamTemplate />
      </TestAppProviders>
    );

    await screen.findByText('Biology');
    await screen.findByText('Physics');
  });

  it('handles exam modal', async () => {
    mock.onGet(ENDPOINT).reply(200, {
      allExams,
    });
    Modal.setAppElement(document.createElement('div'));

    render(
      <TestAppProviders>
        <ExamContextProvider>
          <ExamTemplate />
        </ExamContextProvider>
      </TestAppProviders>
    );

    await waitFor(() => {
      expect(screen.queryByText('Evolution')).not.toBeInTheDocument();
    });
    fireEvent.click(await screen.findByTestId('1'));
    await screen.findByText('Evolution');

    fireEvent.click(screen.queryByText('close')!);
    await waitFor(() => {
      expect(screen.queryByText('Evolution')).not.toBeInTheDocument();
    });
  });
});
