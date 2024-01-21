// FormStep1.tsx
import React, { ChangeEvent } from 'react';
import NextButton from '../Buttons/NextButton';
import { useFormContext } from '@/context/FormContext';

const Step2: React.FC = () => {
  const { state, dispatch } = useFormContext();
  const handleNext = () => {
    // Basic validation
    if (state.data.startTime.trim() === '') {
      dispatch({ type: 'SET_ERRORS', payload: { startTime: 'Start Time is required' } });
    } else {
      dispatch({ type: 'SET_ERRORS', payload: { startTime: null } });
      // Submit the form (you can replace this with your API call or other logic)
      alert(`Form submitted: ${JSON.stringify(state.data)}`);
    }
  };


  return (
    <div>
      <h2 className='text-black text-center my-2 sm:my-4'>Step 2</h2>
      <label htmlFor={'line'} className="text-gray-900">Line:</label>
      <select
        name="line"
        className="bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5"
        value={state.data.line}
        onChange={(e) => dispatch({ type: 'UPDATE_DATA', payload: { line: e.target.value } })}
      >
        <option value="" disabled>Select line</option>
        <option value="1">Line 1</option>
        <option value="2">Line 2</option>
        <option value="3">Line 3</option>
        <option value="4">Line 4</option>
        <option value="5">Line 5</option>
      </select>
      {state.errors.line && <div className='text-red font-bold'>{state.errors.line}</div>}
      
      <br/>
      <div className='flex justify-between'>
      <NextButton onClick={handleNext} text={'Previous'} disabled={false} />
        <NextButton onClick={handleNext} text={'Next'} disabled={!!state.errors.startTime && !!state.errors.line} />
      </div>
    </div>
  );
};

export default Step2;
