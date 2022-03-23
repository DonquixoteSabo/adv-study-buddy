import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.l};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  b {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  //height: 100%;
  margin-left: ${({ theme }) => theme.spacing.l};
`;

export const StyledInput = styled.input`
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
    outline: 2px solid ${({ theme }) => theme.colors.primaryHover};
  }

  &::placeholder {
    color: #c2cbdf;
    font-weight: 400;
  }
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Logged as: <br />
          <b>Teacher</b>
        </p>
      </div>
      <InputWrapper>
        <StyledInput placeholder="find student" />
      </InputWrapper>
    </Wrapper>
  );
};

export default SearchBar;
