import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { StyledTextArea } from 'components/atoms/StyledTextArea/StyledTextArea';
import FormButton from 'components/atoms/FormButton/FormButton';

import { useAddNote } from 'hooks/useAddNote';

import { Wrapper, StyledLabel, Error } from './NotesForm.styles';

type Inputs = {
  title: string;
  content: string;
};

const NotesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const { mutate: addNote } = useAddNote();

  const onSubmit: SubmitHandler<Inputs> = ({ title, content }) => {
    addNote({ title, content });
    reset();
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      {/*TITLE */}
      <StyledLabel htmlFor="title">Title</StyledLabel> <br />
      {errors.title?.type === 'required' && (
        <Error>This field is required</Error>
      )}
      {errors.title?.type === 'maxLength' && (
        <Error>This field is too long</Error>
      )}
      <StyledInput
        type="text"
        id="title"
        {...register('title', { required: true, maxLength: 30 })}
      />
      <br />
      {/*CONTENT */}
      <StyledLabel htmlFor="note-textarea">Content</StyledLabel>
      {errors.content?.type === 'required' && (
        <Error>This field is required</Error>
      )}
      {errors.content?.type === 'minLength' && (
        <Error>This field is too short</Error>
      )}
      <br />
      <StyledTextArea
        id="note-textarea"
        {...register('content', { required: true, minLength: 10 })}
      />
      {/*Submit button*/}
      <FormButton type="submit">Add</FormButton>
    </Wrapper>
  );
};

export default NotesForm;
