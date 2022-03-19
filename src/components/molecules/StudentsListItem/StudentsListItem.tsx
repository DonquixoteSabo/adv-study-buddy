import React, { useContext } from 'react';

import Grade from 'components/atoms/Grade/Grade';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

import { StudentsContext } from 'helpers/StudentsContext';

import {
  Wrapper,
  GridWrapper,
  StyledName,
  StyledAttendance,
} from './StudentsListItem.styles';

interface Props {
  lastName: string;
  firstName: string;
  average: number;
  attendance: number;
}

const StudentsListItem = ({
  lastName,
  firstName,
  average,
  attendance,
}: Props) => {
  const { openStudentModal } = useContext(StudentsContext);
  return (
    <Wrapper onClick={openStudentModal}>
      <GridWrapper>
        <Grade className="grade" average={average} />
        <StyledName>
          {lastName} {firstName}
        </StyledName>
        <StyledAttendance>attendance: {attendance}%</StyledAttendance>
        <DeleteButton />
      </GridWrapper>
    </Wrapper>
  );
};
 
export default StudentsListItem;
