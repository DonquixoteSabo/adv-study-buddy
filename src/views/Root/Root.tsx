import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/styles/theme';

import Students from 'views/Students/Students';

const queryClient = new QueryClient();

const Root = () => {
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes>
              <Route path="/students/:group" element={<Students />} />
              <Route path="/" element={<Navigate to={'/students/A'} />} />
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
};

export default Root;
