import React from 'react';
import styled from 'styled-components';
//components
import Button from 'components/atoms/Button/Button';
//hooks
import { useArticles } from 'hooks/useArticles';

const Wrapper = styled.section`
  grid-column: 3/4;
  grid-row: 1/-1;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.l};
  overflow-y: auto;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: ${({ theme }) => theme.letterSpacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  margin: 0;
`;

const ArticleItem = styled.article`
  max-width: 450px;
  background: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  margin: ${({ theme }) => theme.spacing.l} 0;
  padding: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.lineHeights.sm};
  }
`;

const ArticleTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  margin: 0;
`;

const ArticleCategory = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;
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
      <header>
        <Title>University news feed</Title>
      </header>
      {data!.map((article) => (
        <ArticleItem key={article.title}>
          <header>
            <ArticleTitle>{article.title}</ArticleTitle>
          </header>
          <ArticleCategory>{article.category}</ArticleCategory>
          <p>{article.introduction}</p>
          <Button>Read more</Button>
        </ArticleItem>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
