import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const addNote = ({ title, content }: { title: string; content: string }) => {
  return axios.post(
    `http://localhost:5000/notes/?title=${title}&content=${content}`
  );
};

export const useAddNote = () => {
  const queryClient = useQueryClient();
  return useMutation(addNote, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('notes');
    },
  });
};
