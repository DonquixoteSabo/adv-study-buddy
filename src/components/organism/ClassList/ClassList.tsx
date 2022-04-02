import React from 'react';

import ClassListItem from 'components/molecules/ClassListItem/ClassListItem';
import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';

import { useClasses } from 'hooks/useClasses';

import { List } from './ClassList.styles';

const ClassList = () => {
  const { data, isLoading, error } = useClasses();

  if (error) {
    console.log(error);
    return <h4>Sorry, but we couldn't load data for you</h4>;
  }
  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <section>
      <ClassHeader>Cancel Class</ClassHeader>
      <List>
        {data?.data?.allExams.map((exam) => (
          <ClassListItem {...exam} key={exam._id} />
        ))}
      </List>
    </section>
  );
};

export default ClassList;
