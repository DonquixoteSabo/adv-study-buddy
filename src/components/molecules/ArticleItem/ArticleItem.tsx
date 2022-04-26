import React from 'react';
//components
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleCategory,
  ArticleCol,
  ArticleImgWrapper,
} from './ArticleItem.styles';
import Button from 'components/atoms/Button/Button';
//types
import { Article } from 'hooks/articles/useArticles';

const ArticleItem = ({ title, image, category, introduction }: Article) => {
  return (
    <ArticleWrapper>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>
      <ArticleCategory>{category}</ArticleCategory>
      {image?.url ? (
        <ArticleCol>
          <div>
            <p>{introduction}</p>
            <Button>Read more</Button>
          </div>
          <ArticleImgWrapper>
            <img src={image.url} alt={image.alt} />
          </ArticleImgWrapper>
        </ArticleCol>
      ) : (
        <>
          <p>{introduction}</p>
          <Button>Read more</Button>
        </>
      )}
    </ArticleWrapper>
  );
};

export default ArticleItem;
