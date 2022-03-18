import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { ENDPOINT, query } from 'hooks/useArticles';
import NewsSection from './NewsSection';
import TestAppProviders from '../../../helpers/TestAppProviders';

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
      <TestAppProviders>
        <NewsSection />
      </TestAppProviders>
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
      <TestAppProviders>
        <NewsSection />
      </TestAppProviders>
    );
    await screen.findByText(/Test title/i);
    await screen.findByText(/Read more/i);
  });
  it('displays loading spinner', async () => {
    mock.onPost(ENDPOINT, { query }).timeout();
    render(
      <TestAppProviders>
        <NewsSection />
      </TestAppProviders>
    );
    await screen.findByText(/Loading/i);
  });
});
