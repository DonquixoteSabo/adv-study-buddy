import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../assets/styles/theme';
import GroupContextProvider from './GroupContext';
import { BrowserRouter as Router } from 'react-router-dom';
import StudentsContextProvider from './StudentsContext';

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
            <StudentsContextProvider>{children}</StudentsContextProvider>
          </GroupContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default TestAppProviders;
