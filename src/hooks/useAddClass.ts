import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

interface IPostExam {
  title: string;
  content: string;
  hour: number;
  date: number;
}

const addClass = ({ title, content, hour, date }: IPostExam) => {
  return axios.post(
    'http://localhost:5000/exams/',
    {},
    {
      params: {
        title,
        content,
        hour,
        date,
      },
    }
  );
};

export const useAddClass = () => {
  const queryClient = useQueryClient();
  return useMutation(addClass, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('classes');
    },
  });
};
