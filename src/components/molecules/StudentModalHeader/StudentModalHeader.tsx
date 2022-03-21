import React from 'react';
import Grade from 'components/atoms/Grade/Grade';
import ModalIcons from 'components/atoms/ModalIcons/ModalIcons';

import { Wrapper, Name } from './StudentModal.styles';

interface Props {
  average: number;
  firstName: string;
  lastName: string;
}

const StudentModalHeader = ({ average, firstName, lastName }: Props) => {
  return (
    <Wrapper>
      <Grade average={average} isBig />
      <Name>
        {lastName} {firstName}
      </Name>
      <ModalIcons />
    </Wrapper>
  );
};

export default StudentModalHeader;
