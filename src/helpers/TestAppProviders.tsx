import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { defaultTheme } from 'assets/styles/theme';
import GroupContextProvider from './GroupContext';
import StudentsContextProvider from './StudentsContext';
import ErrorContextProvider from './ErrorContext';

const TestAppProviders: React.FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GroupContextProvider>
            <StudentsContextProvider>
              <ErrorContextProvider>{children}</ErrorContextProvider>
            </StudentsContextProvider>
          </GroupContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default TestAppProviders;
