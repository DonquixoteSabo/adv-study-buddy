import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import StudentsList from 'components/organism/StudentsList/StudentsList';
import Button from 'components/atoms/Button/Button';
import { GroupContext } from 'helpers/GroupContext';

import { Wrapper, Header } from './StudentsSection.styles';
  
const StudentsSection = () => {
  const { group } = useParams();
  const { openModal } = useContext(GroupContext);
  return (
    <Wrapper>
      <div className="row">
        <Header>Group {group?.toUpperCase()}</Header>
        <div onClick={openModal}>
          <Button>change group {'>'}</Button>
        </div>
      </div>
      <StudentsList group={group!} />
    </Wrapper>
  );
};

export default StudentsSection;
