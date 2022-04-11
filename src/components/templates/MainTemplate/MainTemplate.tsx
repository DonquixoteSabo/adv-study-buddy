import React, { useContext } from 'react';
import styled from 'styled-components';

import SearchBar from 'components/templates/SearchBar/SearchBar';
import Navigation from 'components/templates/Navigation/Navigation';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import StudentModal from 'components/organism/StudentModal/StudentModal';
import Logo from 'components/atoms/Logo/Logo';
import Error from 'components/molecules/Error/Error';

import { StudentsContext } from 'helpers/StudentsContext';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  grid-template-rows: 80px 1fr auto;
  min-height: 100vh;
`;

const MainTemplate: React.FC = ({ children }) => {
  const { isStudentModalOpen, closeStudentModal } = useContext(StudentsContext);

  return (
    <Wrapper>
      <Error />
      <StudentModal
        isOpen={isStudentModalOpen}
        closeModal={closeStudentModal}
      />
      <Logo />
      <SearchBar />
      <Navigation />
      <NewsSection />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
