import styled from 'styled-components';

const ClassHeader = styled.header`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin: 1em 0;
`;

export default ClassHeader;
