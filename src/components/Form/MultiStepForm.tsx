// pages/multiStepForm.js

import { ChangeEvent, FormEvent, useState } from 'react';
import NextButton from '../Buttons/NextButton';
import FormStep1 from './FormStep1';
import { useFormContext } from '@/context/FormContext';
import Step1 from './FormStep1';
import Step2 from './FormStep2';

const MultiStepForm = () => {
  const { state } = useFormContext();
  return (
    <div className=" mt-2 mb-4">
      <h1 className='text-base font-normal text-gray-500 text-center'>Multi-Step Form</h1>
      <form>
      {state.step === 1 && <Step1 />}
      {state.step === 2 && <Step2 />}
      </form>
    </div>
  );
};

export default MultiStepForm;
