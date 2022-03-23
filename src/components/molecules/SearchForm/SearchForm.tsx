import React, { useState } from 'react';
import styled from 'styled-components';

import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SearchResults from 'components/atoms/SearchResults/SearchResults';

export const Wrapper = styled.form`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing.l};
  font-family: inherit;
`;

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatchSearch = (v: string) => setSearchValue(v);

  return (
    <>
      <Wrapper>
        <SearchInput dispatchSearch={dispatchSearch} />
        <SearchResults results={searchValue} />
      </Wrapper>
    </>
  );
};

export default SearchForm;
