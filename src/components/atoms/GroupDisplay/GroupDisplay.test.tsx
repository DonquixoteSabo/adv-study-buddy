import React from 'react';
import { render, screen } from '@testing-library/react';

import TestAppProviders from 'helpers/TestAppProviders';
import GroupDisplay from './GroupDisplay';

describe('GroupDisplay', () => {
  it('renders header with given group', async () => {
    render(
      <TestAppProviders>
        <GroupDisplay group="A" />
      </TestAppProviders>
    );

    await screen.findByText(`Group A`);
    await screen.findByText(/change group/i);
  });
});
