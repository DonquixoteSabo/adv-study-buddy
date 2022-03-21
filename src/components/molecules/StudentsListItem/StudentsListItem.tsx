import React, { useContext } from 'react';

import Grade from 'components/atoms/Grade/Grade';
import StudentButton from 'components/atoms/StudentButton/StudentButton';

import { StudentsContext } from 'helpers/StudentsContext';

import {
  Wrapper,
  GridWrapper,
  StyledName,
  StyledAttendance,
} from './StudentsListItem.styles';
import { RiUserSearchLine } from 'react-icons/ri';

interface Props {
  lastName: string;
  firstName: string;
  average: number;
  attendance: number;
  id: { $oid: string };
}

const StudentsListItem = ({
  lastName,
  firstName,
  average,
  attendance,
  id,
}: Props) => {
  const { openStudentModal } = useContext(StudentsContext);

  const handleClick = () => {
    if (openStudentModal) {
      openStudentModal(id.$oid);
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      <GridWrapper>
        <Grade className="grade" average={average} />
        <StyledName>
          {lastName} {firstName}
        </StyledName>
        <StyledAttendance>attendance: {attendance}%</StyledAttendance>
        <StudentButton>
          <RiUserSearchLine />
        </StudentButton>
      </GridWrapper>
    </Wrapper>
  );
};

export default StudentsListItem;
