import React, { useContext } from 'react';
import {
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';

import { useFindStudents } from 'hooks/useFindStudents';
import styled from 'styled-components';
import { StudentsContext } from '../../../helpers/StudentsContext';

interface Props {
  results: string;
}

export const StyledComboboxPopover = styled(ComboboxPopover)`
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
`;

export const StyledComboboxList = styled(ComboboxList)`
  background: white;
  list-style: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0;
  margin-top: 0;
`;

export const StyledComboboxOption = styled(ComboboxOption)`
  padding: 1em 0 1em 1em;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #eceff7;
  }
`;

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
              key={student.id.$oid}
              value={`${student.lastName}  ${student.firstName}`}
              onClick={() => handleModalOpen(student.id.$oid)}
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
