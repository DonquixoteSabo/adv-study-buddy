import React from 'react';

import ArticleItem from 'components/molecules/ArticleItem/ArticleItem';
import Loading from 'components/molecules/Loading/Loading';

import { useArticles } from 'hooks/articles/useArticles';

import { Wrapper, Title } from './NewsSection.styles';

// TODO
// Button "READ more" should navigate user to subpage when he can read more (article.content)
// Handle loading state
// handle error

const NewsSection = () => {
  const { data, isLoading, error } = useArticles();
  if (error) {
    return (
      <h1>
        Sorry, but we were unable to load the data for you. Please consider
        refreshing the page
      </h1>
    );
  }

  return (
    <Wrapper>
      <header>
        <Title>University news feed</Title>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        data?.data.allArticles.map((article) => (
          <ArticleItem {...article} key={article.title} />
        ))
      )}
    </Wrapper>
  );
};

export default NewsSection;
