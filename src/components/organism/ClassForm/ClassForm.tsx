import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import ClassHeader from 'components/atoms/ClassHeader/ClassHeader';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { StyledTextArea } from 'components/atoms/StyledTextArea/StyledTextArea';
import FormButton from 'components/atoms/FormButton/FormButton';

import { useAddClass } from 'hooks/useAddClass';

import { Wrapper, StyledLabel, StyledDatePicker } from './ClassForm.styles';
import 'react-datepicker/dist/react-datepicker.css';

type Inputs = {
  subject: string;
  date: string;
  description: string;
  hour: number;
};

// TODO Validate ClassForm

const ClassForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
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
          <StyledLabel>Subject</StyledLabel>
          <StyledInput
            {...register('subject', { required: true, maxLength: 25 })}
          />
          {/*Hour */}
          <StyledLabel>Hour</StyledLabel>
          <StyledInput
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
          <StyledLabel>Date</StyledLabel>
          <StyledDatePicker
            onChange={(date: Date) => setStartDate(date)}
            selected={startDate}
            minDate={new Date()}
          />
          {/*DESCRIPTION*/}
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            {...register('description', { required: true, max: 99 })}
            style={{ height: 140 }}
          />
          <FormButton type="submit">Confirm</FormButton>
        </Wrapper>
      </form>
    </>
  );
};

export default ClassForm;
