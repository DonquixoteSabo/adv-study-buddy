import React from 'react';
import styled from 'styled-components';

interface GradeProps {
  average: number;
  isBig?: boolean;
}

const Wrapper = styled.div<GradeProps>`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background: ${({ theme, average }) => {
    if (average >= 4) {
      return theme.colors.green;
    }
    if (average >= 3) {
      return theme.colors.yellow;
    }
    if (average > 1) {
      return theme.colors.red;
    }
    return theme.colors.primary;
  }};
  border-radius: 50%;
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.m : theme.fontSize.s};
  font-weight: 700;
  color: white;
`;

interface Props {
  average: number;
  className?: string;
}

const Grade = ({ average, className }: Props) => (
  <Wrapper className={className} average={average}>
    {average}
  </Wrapper>
);

export default Grade;
