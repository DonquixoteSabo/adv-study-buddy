import { useQuery } from 'react-query';
import axios from 'axios';

interface Query {
  data: {
    allNotes: Note[];
  };
}

export interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

const useNotes = () => {
  return useQuery<Query>(
    'notes',
    async () => await axios.get('http://localhost:5000/notes/')
  );
};

export { useNotes };
