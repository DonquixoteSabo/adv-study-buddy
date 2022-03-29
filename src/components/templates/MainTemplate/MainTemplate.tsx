import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Navigation from '../Navigation/Navigation';
import NewsSection from '../NewsSection/NewsSection';
import StudentModal from '../../organism/StudentModal/StudentModal';
import { StudentsContext } from '../../../helpers/StudentsContext';
import Logo from '../../atoms/Logo/Logo';

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
