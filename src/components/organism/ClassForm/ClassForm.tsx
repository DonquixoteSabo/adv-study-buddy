import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';
import { StyledInput } from '../../atoms/StyledInput/StyledInput';
import { StyledTextArea } from '../../atoms/StyledTextArea/StyledTextArea';
import FormButton from '../../atoms/FormButton/FormButton';

type Inputs = {
  subject: string;
  date: string;
  description: string;
};

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: ${({ theme }) => theme.spacing.m} 0;
`;

export const Wrapper = styled.div`
  display: grid;
`;

const ClassForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <ClassHeader>Schedule an exam</ClassHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          {/*SUBJECT*/}
          <StyledLabel>Subject</StyledLabel>
          <StyledInput {...register('subject')} />
          {/*DATE*/}
          <StyledLabel>Date</StyledLabel>
          <StyledInput placeholder="DD/MM-hour" {...register('date')} />
          {/*DESCRIPTION*/}
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            {...register('description')}
            style={{ height: 140 }}
          />
          <FormButton type="submit">Confirm</FormButton>
        </Wrapper>
      </form>
    </>
  );
};

export default ClassForm;
