import React from 'react';
//components
import ArticleItem from 'components/molecules/ArticleItem/ArticleItem';
import { Wrapper, Title } from './NewsSection.styles';
//hooks
import { useArticles } from 'hooks/useArticles';

// TODO
// Button "READ more" should navigate user to subpage when he can read more (article.content)
// Handle loading state
// handle error

const NewsSection = () => {
  const { isLoading, isError, data } = useArticles();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }
  const articles = data?.data.allArticles;

  return (
    <Wrapper>
      <header>
        <Title>University news feed</Title>
      </header>
      {articles?.map((article) => (
        <ArticleItem {...article} key={article.title} />
      ))}
    </Wrapper>
  );
};

export default NewsSection;
