import React, { useContext } from 'react';
import styled from 'styled-components';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import StudentsSection from 'components/templates/StudentsSection/StudentsSection';
import GroupModal from 'components/organism/GroupModal/GroupModal';
import StudentModal from 'components/organism/StudentModal/StudentModal';

import { GroupContext } from 'helpers/GroupContext';
import { StudentsContext } from 'helpers/StudentsContext';
import SearchBar from 'components/organism/SearchBar/SearchBar';
import Logo from 'components/atoms/Logo/Logo';

const StyledNav = styled.nav`
  grid-column: 1/2;
  grid-row: 2/-1;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
`;

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
      <StyledNav>Navigation</StyledNav>
      <StudentsSection />
      <StyledFooter>Created by Kamil Budzik</StyledFooter>
    </MainTemplate>
  );
};

export default Students;
