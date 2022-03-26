import styled from 'styled-components';
import { Combobox } from '@reach/combobox';

export const Wrapper = styled(Combobox)`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing.l};
  font-family: inherit;
`;