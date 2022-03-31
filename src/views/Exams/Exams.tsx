import React from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
import ClassListItem from '../../components/molecules/ClassListItem/ClassListItem';

const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/-1;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.primary};
  flex-wrap: wrap;
`;

export interface Class {
  _id: string;
  data: string;
  hour: string;
  title: string;
}

export const Row = styled.div`
  width: 40%;
  min-width: 300px;
  height: 600px;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.m};
  margin: ${({ theme }) => theme.spacing.m} 0;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClassHeader = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin: 1em 0;
`;

const classes: Class[] = [
  {
    _id: '1',
    title: 'Business Philosophy',
    hour: '15:20',
    data: '22/10',
  },
  {
    _id: '2',
    title: 'Modern Economy',
    hour: '12:00',
    data: '25/10',
  },
  {
    _id: '3',
    title: 'Trade & Logistics',
    hour: '8:00',
    data: '27/10',
  },
  {
    _id: '4',
    title: 'Business Philosophy',
    hour: '15:00',
    data: '05/11',
  },
  {
    _id: '5',
    title: 'Modern Economy',
    hour: '15:00',
    data: '08/11',
  },
];

const Exams = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Row as="section">
          <ClassHeader>Cancel Class</ClassHeader>
          <List>
            {classes.map((exam) => (
              <ClassListItem {...exam} key={exam._id} />
            ))}
          </List>
        </Row>
        <Row as="form"></Row>
      </Wrapper>
    </MainTemplate>
  );
};

export default Exams;
