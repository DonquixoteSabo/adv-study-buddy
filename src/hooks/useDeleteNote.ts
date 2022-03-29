import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteNote = (id: string) => {
  return axios.delete(`http://localhost:5000/notes/${id}`);
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteNote, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('notes');
    },
  });
};
