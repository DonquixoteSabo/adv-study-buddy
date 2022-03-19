import { useQuery } from 'react-query';
import axios from 'axios';

export const ENDPOINT = 'http://localhost:5000/groups/';

interface Query {
  data: {
    students: Student[];
  };
}
 
export interface Student {
  id: { $iod: string };
  firstName: string;
  lastName: string;
  attendance: number;
  average: number;
  group: string;
  course: string;
}

const useGetStudentsByGroup = (group: string) => {
  return useQuery<Query>(
    ['students', group],
    async () => await axios.get(ENDPOINT + group)
  );
};

export { useGetStudentsByGroup };
