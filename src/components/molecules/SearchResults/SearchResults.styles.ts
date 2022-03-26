import styled from 'styled-components';
import {
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';

export const StyledComboboxPopover = styled(ComboboxPopover)`
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
`;

export const StyledComboboxList = styled(ComboboxList)`
  background: white;
  list-style: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0;
  margin-top: 0;
`;

export const StyledComboboxOption = styled(ComboboxOption)`
  padding: 1em 0 1em 1em;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #eceff7;
  }
`;

export { ComboboxOptionText };
