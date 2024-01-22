// FormStep1.tsx
import React, { ChangeEvent } from 'react';
import NextButton from '../Buttons/NextButton';
import { useFormContext } from '@/context/FormContext';

const Step1: React.FC = () => {
  const { state, dispatch } = useFormContext();
  const isShiftInvalid = !!state.errors.shift;

  const handleShiftChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const shiftValue = e.target.value;
    // Validate the shift field
    if (shiftValue.trim() === '') {
      dispatch({ type: 'SET_ERRORS', payload: { shift: 'Shift is required' } });
    } else {
      dispatch({ type: 'SET_ERRORS', payload: { shift: null } });
    }
    // Update the shift value in the form state
    dispatch({ type: 'UPDATE_DATA', payload: { shift: shiftValue } });
  };
  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div>
      <h2 className='text-black text-center my-2 sm:my-4'>Step 1</h2>
      <label htmlFor={'date'} className="text-gray-900">Date</label>
      <input
        type="date"
        name="date"
        className="bg-gray-50 border mt-2 sm:mt-4 pl-5 sm:pl-10 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
        value={state.data.date}
        readOnly
      />
      <br/>
       <label htmlFor={'shift'} className="text-gray-900">Shift:</label>
      <select
        name="shift"
        className="bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5"
        value={state.data.shift}
        onChange={handleShiftChange}
      >
        <option value="" disabled>Select Shift</option>
        <option value="A">Shift A</option>
        <option value="B">Shift B</option>
      </select>
      {state.errors.shift && <div className='text-red-500 py-2 font-bold'>{state.errors.shift}</div>}
      <br />
      <div className='flex justify-between'>
        <NextButton onClick={handleNext} text={'Next'} disabled={isShiftInvalid} />
      </div>
    </div>
  );
};

export default Step1;
