import React from 'react';

import ClassListItem from 'components/molecules/ClassListItem/ClassListItem';
import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';
import Loading from 'components/molecules/Loading/Loading';

import { useClasses } from 'hooks/useClasses';

import { List } from './ClassList.styles';

const ClassList = () => {
  const { data, error, isLoading } = useClasses();

  if (error) {
    console.log(error);
    return <h4>Sorry, but we couldn't load data for you</h4>;
  }
  return (
    <section>
      <ClassHeader>Cancel Class</ClassHeader>
      <List>
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.allExams.map((exam) => (
            <ClassListItem {...exam} key={exam._id} />
          ))
        )}
      </List>
    </section>
  );
};

export default ClassList;
