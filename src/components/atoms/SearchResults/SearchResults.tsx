import React from 'react';

import { useFindStudents } from 'hooks/useFindStudents';

interface Props {
  results: string;
}

const SearchResults = ({ results }: Props) => {
  const { data } = useFindStudents(results);
  const students = data?.data.students;
  console.log(students);

  if (students && students.length > 0) {
    return (
      <div>
        {students.map((student) => (
          <li key={student.id.$oid}>{student.firstName}</li>
        ))}
      </div>
    );
  }

  return <div />;
};

export default SearchResults;
