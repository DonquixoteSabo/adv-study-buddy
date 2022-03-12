import styled from 'styled-components';

export const ArticleWrapper = styled.article`
  max-width: 500px;
  background: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  margin: ${({ theme }) => theme.spacing.l} 0;
  padding: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: ${({ theme }) => theme.lineHeights.sm};
  }
`;

export const ArticleTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  margin: 0;
`;

export const ArticleCategory = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;
`;

export const ArticleCol = styled.div`
  display: grid;
  grid-template-columns: auto 150px;
  place-items: center;

  p {
    margin-right: ${({ theme }) => theme.spacing.m};
  }
`;

export const ArticleImgWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
