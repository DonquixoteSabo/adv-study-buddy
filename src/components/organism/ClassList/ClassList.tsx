import React from 'react';

import ClassListItem from 'components/molecules/ClassListItem/ClassListItem';

import { ClassHeader, List } from './ClassList.styles';

export interface Class {
  _id: string;
  data: string;
  hour: string;
  title: string;
}

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

const ClassList = () => {
  return (
    <section>
      <ClassHeader>Cancel Class</ClassHeader>
      <List>
        {classes.map((exam) => (
          <ClassListItem {...exam} key={exam._id} />
        ))}
      </List>
    </section>
  );
};

export default ClassList;
