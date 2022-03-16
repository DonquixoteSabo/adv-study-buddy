import { useQuery } from 'react-query';
import axios from 'axios';

export const ENDPOINT = 'http://localhost:5000/groups/';

interface Query {
  data: {
    students: Student[];
  };
}

interface Subject {
  subject: string;
  average: number;
}

export interface Student {
  id: { $iod: string };
  firstName: string;
  lastName: string;
  attendance: number;
  average: number;
  group: string;
  course: string;
  grades: Subject[];
}

const useGetStudentsByGroup = (group: string) => {
  return useQuery<Query>(['students', group], async () => {
    const data = await axios.get(ENDPOINT + group);

    return data;
  });
};

export { useGetStudentsByGroup };
