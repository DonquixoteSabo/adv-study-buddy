import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import NotesForm from './NotesForm';

import TestAppProviders from 'helpers/TestAppProviders';

const setup = () => {
  const utils = render(
    <TestAppProviders>
      <NotesForm />
    </TestAppProviders>
  );
  const titleInput = screen.getByLabelText<HTMLInputElement>('Title');
  const contentInput = screen.getByLabelText<HTMLTextAreaElement>('Content');
  return {
    titleInput,
    contentInput,
    ...utils,
  };
};

const mock = new MockAdapter(axios);

describe('Notes form', () => {
  beforeEach(() => {
    mock.onPost().reply(500);
    console.error = jest.fn();
  });
  afterEach(() => {
    mock.reset();
  });

  it('clears inputs on submit', async () => {
    const { titleInput, contentInput } = setup();

    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(contentInput, { target: { value: 'Test content' } });

    fireEvent.submit(screen.getByText('Add'));

    await waitFor(() => {
      expect(titleInput.value).toBe('');
    });
    await waitFor(() => {
      expect(contentInput.value).toBe('');
    });
  });

  it('shows that fields are required', async () => {
    const { titleInput, contentInput } = setup();

    fireEvent.submit(screen.getByText('Add'));
    // inputs are empty
    await waitFor(() => {
      expect(screen.queryAllByText('This field is required')).toHaveLength(2);
    });
    // inputs have content inside
    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(contentInput, { target: { value: 'Test content' } });
    await waitFor(() => {
      expect(screen.queryAllByText('This field is required')).toHaveLength(0);
    });
  });

  it('validate text area', async () => {
    const { contentInput } = setup();

    fireEvent.change(contentInput, { target: { value: 'Tes' } });
    fireEvent.submit(screen.getByText('Add'));
    await waitFor(() => {
      expect(screen.getByText('This field is too short')).toBeInTheDocument();
    });

    fireEvent.change(contentInput, { target: { value: 'Test content' } });
    await waitFor(() => {
      expect(
        screen.queryByText('This field is too short')
      ).not.toBeInTheDocument();
    });
  });
});
