import { useQuery } from 'react-query';
import axios from 'axios';
import { Student } from './useGetStudentsByGroup';

export const ENDPOINT = 'http://localhost:5000/students/';

interface Subject {
  subject: string;
  average: number;
}

interface StudentDetails extends Student {
  grades: Subject[];
}

interface Query {
  data: {
    students: StudentDetails[];
  };
}

const useGetStudentDetails = (id: string) => {
  return useQuery<Query>(
    ['student', id],
    async () => await axios.get(ENDPOINT + id)
  );
};

export { useGetStudentDetails };
