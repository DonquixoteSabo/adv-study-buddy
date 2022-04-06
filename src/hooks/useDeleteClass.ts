import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteClass = (id: string) => {
  return axios.delete(`http://localhost:5000/exams/${id}`);
};

export const useDeleteClass = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClass, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('classes');
    },
  });
};
