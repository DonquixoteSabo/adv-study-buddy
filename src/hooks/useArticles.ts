import { useQuery } from 'react-query';
import { gql, GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://graphql.datocms.com/';
const query = gql`
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

const graphqlClient = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: 'Bearer c8b963ed78e9dfbd6afbe70219c87e',
  },
});

export interface Article {
  title: string;
  category: string;
  introduction: string;
  content: string;
  image: {
    url: string;
    alt: string;
  };
}

const useArticles = () => {
  return useQuery<Article[]>('news', async () => {
    const { allArticles } = await graphqlClient.request(query);
    return allArticles;
  });
};

export { useArticles };
