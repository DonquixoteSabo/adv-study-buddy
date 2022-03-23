import React from 'react';

interface Props {
  results: string;
}

const SearchResults = ({ results }: Props) => {
  console.log(results);
  return <div></div>;
};

export default SearchResults;
