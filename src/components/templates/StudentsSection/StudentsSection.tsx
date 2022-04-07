import React from 'react';
import { useParams } from 'react-router-dom';
import GroupDisplay from 'components/atoms/GroupDisplay/GroupDisplay';

import StudentsList from 'components/organism/StudentsList/StudentsList';

import { Wrapper } from './StudentsSection.styles';
import Loading from '../../molecules/Loading/Loading';

const StudentsSection = () => {
  const { group } = useParams();

  return (
    <Wrapper>
      <div className="row">
        <GroupDisplay group={group!} />
      </div>
      <Loading />
      {/*<StudentsList group={group!} />*/}
    </Wrapper>
  );
};

export default StudentsSection;
