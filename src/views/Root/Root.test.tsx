import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';

describe('Root', () => {
  test('renders Root', () => {
    render(<Root />);
    expect(screen.getByText(/Study Buddy/i)).toBeInTheDocument();
  });
});


