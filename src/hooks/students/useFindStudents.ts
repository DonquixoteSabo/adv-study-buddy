import { useQuery } from 'react-query';
import axios from 'axios';
import { Student } from './useStudentsByGroup';

export const ENDPOINT = 'http://localhost:5000/students/search/';

interface Query {
  data: {
    students: Student[];
  };
}

const useFindStudents = (search: string) => {
  return useQuery<Query>(
    ['studentsSearch', search],
    async () => await axios.get(ENDPOINT + search)
  );
};

export { useFindStudents };
