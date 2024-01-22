// FormStep1.tsx
'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';


const Step1: React.FC = () => {
  const [shift, setShift] = useState<string>('');
  const [shiftError, setShiftError] = useState<string>('');

  useEffect(() => {
    const savedShift = localStorage.getItem('step1Shift');
    if (savedShift) {
      setShift(savedShift);
    }
  }, []);
  
  const handleShiftChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedShift = event.target.value;
    setShift(selectedShift);

    localStorage.setItem('step1Shift', selectedShift);

    if (selectedShift === '') {
      setShiftError('Please select a shift.');
    } else {
      setShiftError('');
    }
  };
  return (
    <div>
      <h2 className='text-black text-center my-2 sm:my-4'>Step 1</h2>
      <label htmlFor={'date'} className="text-gray-900">Date</label>
      <input
        type="date"
        name="date"
        data-testid="date-select"
        className="bg-gray-50 border mt-2 sm:mt-4 pl-5 sm:pl-10 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
        value={new Date().toISOString().split('T')[0]}
        readOnly
      />
      <br/>
       <label htmlFor={'shift'} className="text-gray-900">Shift:</label>
      <select
        name="shift"
        className="bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5"
        value={shift}
        data-testid="shift-select"
        onChange={handleShiftChange}
      >
        <option value="" disabled>Select Shift</option>
        <option value="A">Shift A</option>
        <option value="B">Shift B</option>
      </select>
      {shiftError && <div className='text-red-500 py-2 font-bold'>{shiftError}</div>}
      <br />
    </div>
  );
};

export default Step1;
