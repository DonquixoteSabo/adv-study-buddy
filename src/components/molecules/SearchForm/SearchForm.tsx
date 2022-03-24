import React, { useState } from 'react';
import styled from 'styled-components';

import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SearchResults from 'components/atoms/SearchResults/SearchResults';
import { Combobox } from '@reach/combobox';

export const Wrapper = styled(Combobox)`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing.l};
  font-family: inherit;
`;

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatchSearch = (v: string) => setSearchValue(v);

  return (
    <>
      <Wrapper aria-label="Search students">
        <SearchInput dispatchSearch={dispatchSearch} />
        <SearchResults results={searchValue} />
      </Wrapper>
    </>
  );
};

export default SearchForm;
