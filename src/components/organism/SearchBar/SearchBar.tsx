import React from 'react';
import styled from 'styled-components';

import SearchForm from 'components/molecules/SearchForm/SearchForm';

const Wrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.l};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  b {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Logged as: <br />
          <b>Teacher</b>
        </p>
      </div>
      <SearchForm />
    </Wrapper>
  );
};

export default SearchBar;
