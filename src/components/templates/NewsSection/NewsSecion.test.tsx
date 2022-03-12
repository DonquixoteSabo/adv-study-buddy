import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'assets/styles/theme';
import { ENDPOINT, query } from 'hooks/useArticles';
import NewsSection from './NewsSection';

const AppProviders: React.FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

const mock = new MockAdapter(axios);

describe('NewsSection', () => {
  afterEach(() => {
    mock.reset();
  });

  it('displays an error', async () => {
    // disable error msg
    console.error = jest.fn();

    mock.onPost(ENDPOINT, { query }).networkError();
    render(
      <AppProviders>
        <NewsSection />
      </AppProviders>
    );
    await screen.findByText(/Sorry/i);
  });

  it('displays the articles', async () => {
    mock.onPost(ENDPOINT, { query }).reply(200, {
      data: {
        allArticles: [
          {
            title: 'Test title',
            introduction: 'Test intro',
            content: 'Test content',
            category: 'Test category',
            image: { url: 'test url', alt: 'test alt' },
          },
        ],
      },
    });
    render(
      <AppProviders>
        <NewsSection />
      </AppProviders>
    );
    await screen.findByText(/Test title/i);
    await screen.findByText(/Read more/i);
  });
  it('displays loading spinner', async () => {
    mock.onPost(ENDPOINT, { query }).timeout();
    render(
      <AppProviders>
        <NewsSection />
      </AppProviders>
    );
    await screen.findByText(/Loading/i);
  });
});
