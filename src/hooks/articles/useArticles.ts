import { useQuery } from 'react-query';
import axios from 'axios';

export const ENDPOINT = 'https://graphql.datocms.com/';
export const query = `
  {
    allArticles {
      title
      category
      introduction
      content
      image {
        url
        alt
      }
    }
  }
`;

interface Query {
  data: { allArticles: Article[] };
}

export interface Article {
  title: string;
  category: string;
  introduction: string;
  content: string;
  image?: {
    url: string;
    alt: string;
  };
}

const useArticles = () => {
  return useQuery<Query>('news', async () => {
    const data = await axios.post(
      ENDPOINT,
      { query },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
        },
      }
    );

    return data.data;
  });
};

export { useArticles };
