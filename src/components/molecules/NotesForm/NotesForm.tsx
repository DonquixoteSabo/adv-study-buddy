import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.form`
  //width: 50%;
  width: 340px;
  background: white;
  display: grid;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.l};

  div {
    display: grid;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: ${({ theme }) => theme.spacing.m} 0 ${({ theme }) => theme.spacing.l};
`;
export const StyledNoteInput = styled.input`
  border: 1px solid #c0c7d6;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  padding: 0.5em;
`;

export const StyledNoteTextArea = styled.textarea`
  border: 1px solid #c0c7d6;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  padding: 0.5em;
  height: 300px;
  resize: none;
`;

export const StyledButton = styled.button`
  display: grid;
  place-items: center;
  padding: 10px 35px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  border-radius: 96.94px;
  color: ${({ theme }) => theme.colors.primary};
  background: #eceff7;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  margin: 3em auto;

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const NotesForm = () => {
  return (
    <Wrapper>
      <StyledLabel htmlFor="note-title">Title</StyledLabel> <br />
      <StyledNoteInput type="text" id="note-title" name="note-title" />
      <br />
      <StyledLabel htmlFor="note-textarea">Content</StyledLabel>
      <br />
      <StyledNoteTextArea id="note-textarea" name="note-content" />
      <StyledButton type="submit">Add</StyledButton>
    </Wrapper>
  );
};

export default NotesForm;
