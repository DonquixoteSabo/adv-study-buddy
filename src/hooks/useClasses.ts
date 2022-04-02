import { useQuery } from 'react-query';
import axios from 'axios';

export interface Class {
  _id: string;
  date: {
    prettyDate?: string;
    unixDate: string | number; // it might be an number in the future
  };
  content: string;
  hour: string;
  title: string;
}

interface Query {
  data: {
    allExams: Class[];
  };
}

const useClasses = () => {
  return useQuery<Query>(
    'classes',
    async () => await axios.get('http://localhost:5000/exams/')
  );
};

export { useClasses };
