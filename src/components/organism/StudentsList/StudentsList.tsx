import React from 'react';

import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Student, useGetStudentsByGroup } from 'hooks/useGetStudentsByGroup';

import { Wrapper } from './StudentsList.styles';

interface Props {
  group: string;
}

const StudentsList = ({ group }: Props) => {
  const { isLoading, error, data } = useGetStudentsByGroup(group);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>Sorry, but we couldn't load data for you</h1>;
  }

  const students = data?.data.students;

  return (
    <Wrapper>
      {students?.map(
        ({ lastName, firstName, attendance, average }: Student) => (
          <StudentsListItem
            lastName={lastName}
            firstName={firstName}
            average={average}
            attendance={attendance}
            key={firstName + lastName}
          />
        )
      )}
    </Wrapper>
  );
};

export default StudentsList;
