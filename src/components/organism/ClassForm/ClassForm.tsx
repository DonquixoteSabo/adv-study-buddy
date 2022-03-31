import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styled from 'styled-components';
import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';
import { StyledInput } from '../../atoms/StyledInput/StyledInput';
import { StyledTextArea } from '../../atoms/StyledTextArea/StyledTextArea';
import FormButton from '../../atoms/FormButton/FormButton';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

export const StyledDatePicker = styled(ReactDatePicker)`
  border: 1px solid #c0c7d6;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  padding: 0.5em;
`;

const ClassForm = () => {
  const { register, handleSubmit, reset, control } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  // @ts-ignore
  return (
    <>
      <ClassHeader>Schedule an exam</ClassHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          {/*SUBJECT*/}
          <StyledLabel>Subject</StyledLabel>
          <StyledInput
            {...register('subject', { required: true, maxLength: 25 })}
          />
          {/*DATE*/}
          <StyledLabel>Date</StyledLabel>
          {/*<StyledInput placeholder="DD/MM-hour" {...register('date')} />*/}
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <StyledDatePicker
                onChange={(date: any) => field.onChange(date)}
                onBlur={field.onBlur}
                selected={field.value || new Date()}
              />
            )}
          />
          {/*DESCRIPTION*/}
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            {...register('description', { max: 99 })}
            style={{ height: 140 }}
          />
          <FormButton type="submit">Confirm</FormButton>
        </Wrapper>
      </form>
    </>
  );
};

export default ClassForm;
