import React from 'react';

import SearchForm from 'components/organism/SearchForm/SearchForm';

import { Wrapper } from './SearchBar.styles';

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
