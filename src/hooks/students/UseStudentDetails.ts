import { useQuery } from 'react-query';
import axios from 'axios';
import { Student } from './useStudentsByGroup';

export const ENDPOINT = 'http://localhost:5000/students/';

export interface Subject {
  subject: string;
  average: number;
}

interface StudentDetails extends Student {
  grades: Subject[];
}

interface Query {
  data: {
    students: StudentDetails;
  };
}

const useStudentDetails = (id: string) => {
  return useQuery<Query>(
    ['student', id],
    async () => await axios.get(ENDPOINT + id)
  );
};

export { useStudentDetails };
