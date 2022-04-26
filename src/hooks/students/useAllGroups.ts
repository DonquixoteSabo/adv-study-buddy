import { useQuery } from 'react-query';
import axios from 'axios';

export const ENDPOINT = 'http://localhost:5000/groups/getGroups';

interface Query {
  data: {
    groups: string[];
  };
}

const useAllGroups = () => {
  return useQuery<Query>(['allGroups'], async () => await axios.get(ENDPOINT));
};

export { useAllGroups };
