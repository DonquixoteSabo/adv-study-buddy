import React, { useState } from 'react';

import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SearchResults from 'components/molecules/SearchResults/SearchResults';

import { Wrapper } from './SearchForm.styles';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatchSearch = (v: string) => setSearchValue(v);

  return (
    <>
      <Wrapper aria-label="Search students" openOnFocus>
        <SearchInput dispatchSearch={dispatchSearch} />
        <SearchResults results={searchValue} />
      </Wrapper>
    </>
  );
};

export default SearchForm;
