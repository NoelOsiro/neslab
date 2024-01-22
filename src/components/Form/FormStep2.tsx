// FormStep2.tsx
'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';

const Step2: React.FC = () => {
  const [line, setLine] = useState<string>('');
  const [lineError, setLineError] = useState<string>('');
  useEffect(() => {
    const savedLine = localStorage.getItem('step2Line');
    if (savedLine) {
      setLine(savedLine);
    }
  }, []);

  const handleLineChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLine = event.target.value;
    setLine(selectedLine);

    localStorage.setItem('step2Line', selectedLine);

    if (selectedLine === '') {
      setLineError('Please select a line.');
    } else {
      setLineError('');
    }
  };
  return (
    <div>
      <h2 className='text-black text-center my-2 sm:my-4'>Step 2</h2>
      <label htmlFor={'line'} className="text-gray-900">Line:</label>
      <select
        name="line"
        data-testid="line-select"
        className="bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5"
        value={line}
        onChange={handleLineChange}
      >
        <option value="" disabled>Select line</option>
        <option value="1">Line 1</option>
        <option value="2">Line 2</option>
        <option value="3">Line 3</option>
        <option value="4">Line 4</option>
        <option value="5">Line 5</option>
      </select>
      {lineError && <div className='text-red font-bold'>{lineError}</div>}
      
      <br/>
    </div>
  );
};

export default Step2;
