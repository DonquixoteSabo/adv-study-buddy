import { useQuery } from 'react-query';
import axios from 'axios';

export const ENDPOINT = 'http://localhost:5000/groups/getGroups';

interface Query {
  data: {
    groups: string[];
  };
}

const useGetAllGroups = () => {
  return useQuery<Query>(['allGroups'], async () => {
    const data = await axios.get(ENDPOINT);
    console.log(data);
    return data;
  });
};

export { useGetAllGroups };
