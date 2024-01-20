// FormStep1.tsx
import React, { ChangeEvent } from 'react';
import NextButton from '../Buttons/NextButton';

interface FormStep1Props {
  formData: {
    date: string;
    shift: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
}

const FormStep1: React.FC<FormStep1Props> = ({ formData, handleInputChange, nextStep }) => {
  return (
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
        aria-placeholder='Select shift'
      >
        <option value="A">Shift A</option>
        <option value="B">Shift B</option>
      </select>
      <br />
      <div className='flex justify-between'>
        <NextButton onClick={nextStep} text={'Next'} disabled={!formData.shift} />
      </div>
    </div>
  );
};

export default FormStep1;
