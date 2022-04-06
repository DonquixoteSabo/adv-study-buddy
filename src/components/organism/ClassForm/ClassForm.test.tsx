import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TestAppProviders from 'helpers/TestAppProviders';

import ClassForm from './ClassForm';
import userEvent from '@testing-library/user-event';

describe('ClassForm', () => {
  it('displays subject error', async () => {
    render(
      <TestAppProviders>
        <ClassForm />
      </TestAppProviders>
    );

    fireEvent.click(screen.getByText('Confirm'));
    expect(await screen.findAllByText(/This field is required/i)).toHaveLength(
      3
    );

    userEvent.type(screen.getByLabelText<HTMLInputElement>('Subject'), 'a');
    expect(
      await screen.findByText(/This field is too short/i)
    ).toBeInTheDocument();
  });

  it('displays hour error', async () => {
    render(
      <TestAppProviders>
        <ClassForm />
      </TestAppProviders>
    );
    userEvent.click(screen.getByText('Confirm'));
    userEvent.type(screen.getByLabelText('Description'), 'Evolution');
    expect(await screen.findAllByText(/This field is required/i)).toHaveLength(
      2
    );
  });

  it('displays description error', async () => {
    render(
      <TestAppProviders>
        <ClassForm />
      </TestAppProviders>
    );
    userEvent.click(screen.getByText('Confirm'));
    userEvent.type(screen.getByLabelText('Description'), 'Evolution');
    expect(await screen.findAllByText(/This field is required/i)).toHaveLength(
      2
    );
    userEvent.type(
      screen.getByLabelText('Description'),
      'EvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolut' +
        'ionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutio' +
        'EvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolu' +
        'tionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvolutionEvol' +
        'utionEvolutionEvolution'
    );
    expect(
      await screen.findByText('This field is too long')
    ).toBeInTheDocument();
  });
});
