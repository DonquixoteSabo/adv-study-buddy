import React from 'react';

import { Subject } from 'hooks/UseGetStudentDetails';
import Grade from 'components/atoms/Grade/Grade';

import { List } from './GradeList.styles';

interface Props {
  course: string;
  grades: Subject[];
}

const GradeList = ({ course, grades }: Props) => {
  return (
    <div>
      <h4>Course:</h4>
      {course}
      <h4>Average grades:</h4>
      <List>
        {grades.map((grade) => (
          <li>
            <p>{grade.subject}</p> <Grade average={grade.average} />
          </li>
        ))}
      </List>
    </div>
  );
};

export default GradeList;
