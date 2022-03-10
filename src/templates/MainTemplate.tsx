import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr auto;
  grid-template-rows: 80px 1fr;
  min-height: calc(100vh - 1em);
  margin-top: 1em;
`;

const MainTemplate: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default MainTemplate;
