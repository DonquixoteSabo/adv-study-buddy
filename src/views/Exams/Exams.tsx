import React, { useContext } from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Logo from 'components/atoms/Logo/Logo';
import Navigation from 'components/templates/Navigation/Navigation';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import StudentModal from 'components/organism/StudentModal/StudentModal';
import SearchBar from 'components/templates/SearchBar/SearchBar';

import { StudentsContext } from 'helpers/StudentsContext';

const Exams = () => {
  const { isStudentModalOpen, closeStudentModal } = useContext(StudentsContext);

  return (
    <MainTemplate>
      <StudentModal
        isOpen={isStudentModalOpen}
        closeModal={closeStudentModal}
      />
      <SearchBar />
      <Logo />
      <Navigation />
      <NewsSection />
      <h1>Exams</h1>
    </MainTemplate>
  );
};

export default Exams;
