// pages/multiStepForm.js

import { ChangeEvent, FormEvent, useState } from 'react';
import NextButton from '../Buttons/NextButton';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    shift: '',
    email: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
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
          <div>
            <h2 className='text-black text-center my-2 sm:my-4'>Step 1</h2>
            <label htmlFor={'Date'} className="text-gray-900">Date</label>
              <input
                type="date"
                name="Date"
                className="bg-gray-50 border mt-2 sm:mt-4 pl-5 sm:pl-10 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                value={formData.date}
                readOnly
                onChange={handleInputChange}
              />
            <br />
            <label htmlFor={'shift'} className="text-gray-900">Shift:</label>
            <select
              name="shift"
              className="bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5"
              value={formData.shift}
              onChange={handleInputChange}
            >
              <option value="A">Shift A</option>
              <option value="B">Shift B</option>
            </select>
            <br />
            <div className='flex justify-between'>
            <NextButton onClick={nextStep} text={'Next'} disabled={!formData.shift}/>
            </div>
          </div>
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
