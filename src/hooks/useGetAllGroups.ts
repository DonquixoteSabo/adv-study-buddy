import { useQuery } from 'react-query';
import axios from 'axios';

export const ENDPOINT = 'http://localhost:5000/groups/getGroups';

interface Query {
  data: {
    groups: string[];
  };
}

const useGetAllGroups = () => {
  return useQuery<Query>(['allGroups'], async () => await axios.get(ENDPOINT));
};

export { useGetAllGroups };
