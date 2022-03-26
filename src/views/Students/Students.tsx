import React, { useContext } from 'react';
import styled from 'styled-components';

import StudentsSection from 'components/templates/StudentsSection/StudentsSection';
import GroupModal from 'components/organism/GroupModal/GroupModal';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

import { GroupContext } from 'helpers/GroupContext';

const StyledFooter = styled.footer`
  grid-column: 2/3;
  grid-row: 3/4;
  text-align: center;
`;

const Students = () => {
  const { closeModal, isModalOpen } = useContext(GroupContext);

  return (
    <MainTemplate>
      <GroupModal isOpen={isModalOpen} closeModal={closeModal} />
      <StudentsSection />
      <StyledFooter>Created by Kamil Budzik</StyledFooter>
    </MainTemplate>
  );
};

export default Students;
