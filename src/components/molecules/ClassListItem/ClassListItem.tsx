import React from 'react';
import styled from 'styled-components';
import { Class } from 'views/Exams/Exams';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ImCancelCircle } from 'react-icons/im';

export const Wrapper = styled.li`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.5em 0;

  .icon {
    font-size: 14px;
  }
`;
export const Time = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};

  p {
    margin: 0;
  }

  .date {
    font-weight: 700;
  }
`;
export const Title = styled.p`
  font-weight: 700;
`;
const ClassListItem = ({ _id, title, data, hour }: Class) => {
  return (
    <Wrapper>
      <Time>
        <p className="date">{data}</p>
        <p>{hour}</p>
      </Time>
      <Title>{title}</Title>
      <IconButton isSmall>
        <ImCancelCircle className="icon" />
      </IconButton>
    </Wrapper>
  );
};

export default ClassListItem;
