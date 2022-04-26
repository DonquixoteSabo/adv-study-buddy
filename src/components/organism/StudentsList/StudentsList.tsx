import React, { useContext } from 'react';

import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import Loading from 'components/molecules/Loading/Loading';

import { Student, useStudentsByGroup } from 'hooks/students/useStudentsByGroup';

import { Wrapper } from './StudentsList.styles';
import { ErrorContext } from '../../../helpers/ErrorContext';

interface Props {
  group: string;
}

const StudentsList = ({ group }: Props) => {
  const { isLoading, data, isError } = useStudentsByGroup(group);
  const { addError } = useContext(ErrorContext);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    addError('Students Error');
  }

  const students = data?.data.students;

  return (
    <Wrapper>
      {students?.map(
        ({ lastName, firstName, attendance, average, _id }: Student) => (
          <StudentsListItem
            lastName={lastName}
            firstName={firstName}
            average={average}
            attendance={attendance}
            key={firstName + lastName}
            _id={_id}
          />
        )
      )}
    </Wrapper>
  );
};

export default StudentsList;
