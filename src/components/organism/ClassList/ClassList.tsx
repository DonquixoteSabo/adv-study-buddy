import React, { useContext } from 'react';

import ClassListItem from 'components/molecules/ClassListItem/ClassListItem';
import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';
import Loading from 'components/molecules/Loading/Loading';

import { useClasses } from 'hooks/classes/useClasses';

import { List } from './ClassList.styles';
import { ErrorContext } from 'helpers/ErrorContext';

const ClassList = () => {
  const { data, error, isLoading } = useClasses();
  const { addError } = useContext(ErrorContext);

  if (error) {
    addError('ClassList error');
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
