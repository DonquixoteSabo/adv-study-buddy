import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: ${({ theme }) => theme.spacing.m} 0;
`;

export const Wrapper = styled.div`
  display: grid;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  border: 1px solid #c0c7d6;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  padding: 0.5em;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
