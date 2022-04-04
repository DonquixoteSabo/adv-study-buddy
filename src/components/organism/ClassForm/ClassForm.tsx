import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { StyledTextArea } from 'components/atoms/StyledTextArea/StyledTextArea';
import FormButton from 'components/atoms/FormButton/FormButton';

import { useAddClass } from 'hooks/useAddClass';

import {
  Wrapper,
  StyledLabel,
  StyledDatePicker,
  Error,
} from './ClassForm.styles';
import 'react-datepicker/dist/react-datepicker.css';

type Inputs = {
  subject: string;
  date: string;
  description: string;
  hour: number;
};

// TODO Validate ClassForm

const ClassForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { mutate: addClass } = useAddClass();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit: SubmitHandler<Inputs> = ({ hour, description, subject }) => {
    addClass({
      title: subject,
      hour,
      content: description,
      date: Math.floor(new Date(startDate).getTime() / 1000), //Convert startDate to Unix timestamp
    });
    reset();
  };
  return (
    <>
      <ClassHeader>Schedule an exam</ClassHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          {/*SUBJECT*/}
          <StyledLabel htmlFor="subject">Subject</StyledLabel>
          {errors.subject?.type === 'maxLength' && (
            <Error>This field is too long</Error>
          )}
          {errors.subject?.type === 'minLength' && (
            <Error>This field is too short</Error>
          )}
          {errors.subject?.type === 'required' && (
            <Error>This field is required</Error>
          )}
          <StyledInput
            id="subject"
            {...register('subject', {
              required: true,
              maxLength: 25,
              minLength: 3,
            })}
          />
          {/*Hour */}
          <StyledLabel htmlFor="hour">Hour</StyledLabel>
          {errors.hour?.type === 'required' && (
            <Error>This field is required</Error>
          )}
          <StyledInput
            id="hour"
            type="time"
            min={0}
            max={24}
            placeholder="15.00"
            style={{ width: '50%' }}
            {...register('hour', {
              required: true,
              minLength: 2,
              maxLength: 5,
            })}
          />
          {/*DATE*/}
          <StyledLabel htmlFor="date">Date</StyledLabel>
          <StyledDatePicker
            id="date"
            onChange={(date: Date) => setStartDate(date)}
            selected={startDate}
            minDate={new Date()}
          />
          {/*DESCRIPTION*/}
          <StyledLabel htmlFor="description">Description</StyledLabel>
          {errors.description?.type === 'maxLength' && (
            <Error>This field is too long</Error>
          )}
          {errors.description?.type === 'required' && (
            <Error>This field is required</Error>
          )}
          <StyledTextArea
            id="description"
            {...register('description', { required: true, maxLength: 99 })}
            style={{ height: 140 }}
          />
          <FormButton type="submit">Confirm</FormButton>
        </Wrapper>
      </form>
    </>
  );
};

export default ClassForm;
