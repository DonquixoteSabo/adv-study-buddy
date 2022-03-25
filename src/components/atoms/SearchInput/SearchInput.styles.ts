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
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::placeholder {
    color: #c2cbdf;
    font-weight: 400;
  }
`;
