import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { StyledInput } from './SearchInput.styles';

interface Props {
  dispatchSearch: (v: string) => void;
}

const SearchInput = ({ dispatchSearch }: Props) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        dispatchSearch(val);
      }, 300),
    [dispatchSearch]
  );

  useEffect(() => debouncedSearch(value), [value, debouncedSearch]);

  return (
    <StyledInput
      placeholder="find student"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      selectOnClick
    />
  );
};

export default SearchInput;
