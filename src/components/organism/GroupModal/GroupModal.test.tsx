import React from 'react';
import Modal from 'react-modal';
import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

import TestAppProviders from 'helpers/TestAppProviders';
import GroupModal from './GroupModal';

const mock = new MockAdapter(axios);

describe('GroupModal', () => {
  afterEach(() => {
    mock.reset();
  });

  it('renders modal', async () => {
    Modal.setAppElement(document.createElement('div'));

    mock.onGet('http://localhost:5000/groups/getGroups').reply(200, {
      groups: ['A', 'B', 'C', 'D'],
    });

    render(
      <TestAppProviders>
        <GroupModal isOpen={true} />
      </TestAppProviders>
    );

    await screen.findByText(/select a group/i);
    await screen.findByText('A');
    await screen.findByText('D');
  });

  it('changes group route param', async () => {
    Modal.setAppElement(document.createElement('div'));

    mock.onGet('http://localhost:5000/groups/getGroups').reply(200, {
      groups: ['A', 'B', 'C', 'D'],
    });

    render(
      <TestAppProviders>
        <GroupModal isOpen={true} />
      </TestAppProviders>
    );

    const groupLink = await screen.findByText('A');
    userEvent.click(groupLink);
    expect(groupLink).toHaveAttribute('href', '/students/A');
  });
});
