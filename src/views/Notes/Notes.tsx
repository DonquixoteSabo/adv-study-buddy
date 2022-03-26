import React, { useContext } from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Logo from 'components/atoms/Logo/Logo';
import Navigation from 'components/templates/Navigation/Navigation';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import SearchBar from 'components/templates/SearchBar/SearchBar';
import StudentModal from 'components/organism/StudentModal/StudentModal';

import { StudentsContext } from 'helpers/StudentsContext';

const Notes = () => {
  const { isStudentModalOpen, closeStudentModal } = useContext(StudentsContext);

  return (
    <MainTemplate>
      <StudentModal
        isOpen={isStudentModalOpen}
        closeModal={closeStudentModal}
      />
      <Logo />
      <Navigation />
      <NewsSection />
      <SearchBar />
      <h1>Notes</h1>
    </MainTemplate>
  );
};

export default Notes;
