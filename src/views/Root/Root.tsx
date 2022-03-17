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
import React, { createContext } from 'react';
import Modal from 'react-modal';

const queryClient = new QueryClient();

interface IGroupContext {
  isModalOpen: boolean;
  openModal?: () => void;
  closeModal?: () => void;
}

Modal.setAppElement('#group-modal');

export const GroupContext = createContext<IGroupContext>({
  isModalOpen: false,
});

const Root = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <GroupContext.Provider
              value={{ openModal, closeModal, isModalOpen }}
            >
              <Routes>
                <Route path="/students/:group" element={<Students />} />
                <Route path="/" element={<Navigate to={'/students/A'} />} />
              </Routes>
            </GroupContext.Provider>
          </ThemeProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
};

export default Root;
