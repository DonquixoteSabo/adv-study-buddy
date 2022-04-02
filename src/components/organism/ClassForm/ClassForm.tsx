import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
  hour: number;
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
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const subject = data.subject;
    const hour = data.hour;
    const description = data.description;
    const date = Math.floor(new Date(startDate).getTime() / 1000);
    console.log(subject, hour, description, date);
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
