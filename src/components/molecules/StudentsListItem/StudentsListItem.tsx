import React, { useContext } from 'react';

import Grade from 'components/atoms/Grade/Grade';
import IconButton from 'components/atoms/IconButton/IconButton';

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
  _id: string;
}

const StudentsListItem = ({
  lastName,
  firstName,
  average,
  attendance,
  _id,
}: Props) => {
  const { openStudentModal } = useContext(StudentsContext);

  const handleClick = () => {
    if (openStudentModal) {
      openStudentModal(_id);
    }
  };

  return (
    <Wrapper>
      <GridWrapper>
        <Grade className="grade" average={average} />
        <StyledName>
          {lastName} {firstName}
        </StyledName>
        <StyledAttendance>attendance: {attendance}%</StyledAttendance>
        <IconButton onClick={handleClick}>
          <RiUserSearchLine />
        </IconButton>
      </GridWrapper>
    </Wrapper>
  );
};

export default StudentsListItem;
