// pages/multiStepForm.js

import { ChangeEvent, FormEvent, useState } from 'react';
import NextButton from '../Buttons/NextButton';
import FormStep1 from './FormStep1';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    shift: 'A',
    email: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Process or submit the form data
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className=" mt-2 mb-4">
      <h1 className='text-base font-normal text-gray-500 text-center'>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <FormStep1 formData={formData} handleInputChange={handleInputChange} nextStep={nextStep} />
        )}

        {currentStep === 2 && (
          <div>
            <h2>Step 2: Contact Information</h2>
            <label>
              Email:
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <div className='flex justify-between'>
            <NextButton onClick={nextStep} text={'Previous'} disabled={false}/>
            <NextButton onClick={nextStep} text={'Next'} disabled={!formData.email}/>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2>Step 3: Review and Submit</h2>
            <p>First Name: {formData.date}</p>
            <p>Last Name: {formData.shift}</p>
            <p>Email: {formData.email}</p>
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
