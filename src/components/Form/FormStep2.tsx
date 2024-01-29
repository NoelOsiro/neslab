// FormStep2.tsx
import React, { ChangeEvent, useEffect, useState } from 'react';

const Step2: React.FC = () => {
  const [line, setLine] = useState<string>('');
  const [lineError, setLineError] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [startTimeError, setStartTimeError] = useState<string>('');

  useEffect(() => {
    const savedLine = localStorage.getItem('step2Line');
    const savedTime = localStorage.getItem('step2Time');
    if (savedLine) {
      setLine(savedLine);
    }
    if (savedTime) {
      setStartTime(savedTime);
    }
  }, []);

  const handleStartTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTime = event.target.value;
    if (selectedTime === '') {
      setStartTimeError('Please select a Time.');
    } else {
      setStartTime(selectedTime);
      localStorage.setItem('step2Time', selectedTime);
      setStartTimeError('');
    }
  };

  const handleLineChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLine = event.target.value;
    if (selectedLine === '') {
      setLineError('Please select a line.');
    } else {
      setLine(selectedLine);
      localStorage.setItem('step2Line', selectedLine);
      setLineError('');
    }
  };

  return (
    <div>
      <h2 className='text-black text-center my-2 sm:my-4'>Step 2</h2>
      <label htmlFor='line' className='text-gray-900'>
        Line:
      </label>
      <select
        name='line'
        data-testid='line-select'
        className='bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5'
        value={line}
        onChange={handleLineChange}
      >
        <option value='' disabled>
          Select line
        </option>
        <option value='1'>Line 1</option>
        <option value='2'>Line 2</option>
        <option value='3'>Line 3</option>
        <option value='4'>Line 4</option>
        <option value='5'>Line 5</option>
      </select>
      {lineError.length > 0 && <div className='text-red font-bold'>{lineError}</div>}
      <label htmlFor='startTime' className='text-gray-900'>
        Start time:
      </label>
      <input
        name='startTime'
        type='text'
        data-testid='start-select'
        className='bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5'
        value={startTime}
        onChange={handleStartTimeChange}
      />
      {startTimeError.length > 0 && <div className='text-red-500 py-2 font-bold'>{startTimeError}</div>}
      <br />
    </div>
  );
};

export default Step2;
