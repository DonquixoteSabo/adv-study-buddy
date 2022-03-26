import React, { useContext } from 'react';
import styled from 'styled-components';

import NewsSection from 'components/templates/NewsSection/NewsSection';
import StudentsSection from 'components/templates/StudentsSection/StudentsSection';
import GroupModal from 'components/organism/GroupModal/GroupModal';
import StudentModal from 'components/organism/StudentModal/StudentModal';

import { GroupContext } from 'helpers/GroupContext';
import { StudentsContext } from 'helpers/StudentsContext';
import SearchBar from 'components/templates/SearchBar/SearchBar';
import Logo from 'components/atoms/Logo/Logo';
import Navigation from 'components/templates/Navigation/Navigation';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const StyledFooter = styled.footer`
  grid-column: 2/3;
  grid-row: 3/4;
  text-align: center;
`;

const Students = () => {
  const { closeModal, isModalOpen } = useContext(GroupContext);
  const { isStudentModalOpen, closeStudentModal } = useContext(StudentsContext);
  return (
    <MainTemplate>
      <GroupModal isOpen={isModalOpen} closeModal={closeModal} />
      <StudentModal
        isOpen={isStudentModalOpen}
        closeModal={closeStudentModal}
      />
      <Logo />
      <SearchBar />
      <NewsSection />
      <Navigation />
      <StudentsSection />
      <StyledFooter>Created by Kamil Budzik</StyledFooter>
    </MainTemplate>
  );
};

export default Students;
