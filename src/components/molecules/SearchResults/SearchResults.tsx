import React, { useContext } from 'react';

import { useFindStudents } from 'hooks/students/useFindStudents';
import { StudentsContext } from 'helpers/StudentsContext';

import {
  StyledComboboxPopover,
  StyledComboboxList,
  StyledComboboxOption,
  ComboboxOptionText,
} from './SearchResults.styles';

interface Props {
  results: string;
}

const SearchResults = ({ results }: Props) => {
  const { openStudentModal } = useContext(StudentsContext);
  const { data } = useFindStudents(results);

  const handleModalOpen = (v: string) => {
    if (openStudentModal) {
      openStudentModal(v);
    }
  };

  const students = data?.data.students;

  if (students && students.length > 0) {
    return (
      <StyledComboboxPopover>
        <StyledComboboxList>
          {students.map((student) => (
            <StyledComboboxOption
              key={student._id}
              value={`${student.lastName}  ${student.firstName}`}
              onClick={() => handleModalOpen(student._id)}
            >
              <ComboboxOptionText />
            </StyledComboboxOption>
          ))}
        </StyledComboboxList>
      </StyledComboboxPopover>
    );
  }

  return <div />;
};

export default SearchResults;
