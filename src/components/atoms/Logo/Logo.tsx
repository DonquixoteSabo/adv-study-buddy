import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: right;
  color: white;
  display: grid;
  place-items: flex-end;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing.m};
}
`;

const Background = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center right;
  padding-right: 0.5em;
`;

const Logo = () => {
  return (
    <Wrapper>
      <Background>
        Study <br />
        Buddy
      </Background>
    </Wrapper>
  );
};

export default Logo;
