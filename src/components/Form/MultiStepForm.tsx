// pages/multiStepForm.js
'use client'
import { useEffect, useState } from 'react';
import NextButton from '../Buttons/NextButton';
import Step1 from './FormStep1';
import Step2 from './FormStep2';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  const handleNext = () => {
    // Validate form for errors
    setCurrentStep((prevStep) => {
      // Save current step to localStorage
      localStorage.setItem('currentStep', (prevStep + 1).toString());
      return prevStep < 3 ? prevStep + 1 : prevStep;
    });
  };

  const handlePrevious = () => {
    // Move to the previous step
    setCurrentStep((prevStep) => {
      // Save current step to localStorage
      localStorage.setItem('currentStep', (prevStep - 1).toString());
      return prevStep > 1 ? prevStep - 1 : prevStep;
    });
  };
  return (
    <div className=" mt-2 mb-4">
      <h1 className='text-base font-normal text-gray-500 text-center'>Multi-Step Form</h1>
      <div>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        <div className='flex justify-between'>
          {currentStep > 1 ? <NextButton onClick={handlePrevious} text={'Previous'} disabled={false} /> : null}
          <NextButton onClick={handleNext} text={'Next'} disabled={false} />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
