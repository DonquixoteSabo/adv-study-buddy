import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { ComboboxInput } from '@reach/combobox';

export const StyledInput = styled(ComboboxInput)`
  width: 100%;
  max-width: 450px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  border: none;
  padding: 15px 15px 15px 5%;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: inherit;
  font-weight: 700;

  &:focus {
    //outline: 2px solid ${({ theme }) => theme.colors.primaryHover};
    outline: none;
  }

  &::placeholder {
    color: #c2cbdf;
    font-weight: 400;
  }
`;

interface Props {
  dispatchSearch: (v: string) => void;
}

const SearchInput = ({ dispatchSearch }: Props) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce((val) => {
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
    />
  );
};

export default SearchInput;
