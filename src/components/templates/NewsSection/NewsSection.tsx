import React from 'react';
import styled from 'styled-components';
import { useArticles } from 'hooks/useArticles';

const Wrapper = styled.section`
  grid-column: 3/4;
  grid-row: 1/-1;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing.m};
`;

const NewsSection = () => {
  const { isLoading, error, data } = useArticles();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Wrapper>
      <h1>news-section</h1>
      {data!.map((article) => (
        <p>{article.title}</p>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
