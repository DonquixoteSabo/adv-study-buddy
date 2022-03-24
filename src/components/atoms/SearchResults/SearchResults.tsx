import React from 'react';
import {
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';

import { useFindStudents } from 'hooks/useFindStudents';

interface Props {
  results: string;
}

const SearchResults = ({ results }: Props) => {
  const { data } = useFindStudents(results);
  const students = data?.data.students;

  if (students && students.length > 0) {
    return (
      <ComboboxPopover>
        <ComboboxList>
          {students.map((student) => (
            <ComboboxOption
              key={student.id.$oid}
              value={student.lastName + student.firstName}
            >
              <ComboboxOptionText />
            </ComboboxOption>
          ))}
        </ComboboxList>
      </ComboboxPopover>
    );
  }

  return <div />;
};

export default SearchResults;
