import React from 'react';
import { render, screen } from '@testing-library/react';
import MainTemplate from './MainTemplate';

describe('MainTemplate', () => {
  it('renders passed elements', () => {
    render(<MainTemplate>Hello, I am trying to work</MainTemplate>);
    expect(screen.getByText(/Hello, I am trying to work/i)).toBeInTheDocument();
  });
});
