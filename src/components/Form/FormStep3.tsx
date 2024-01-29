import React, { ChangeEvent, useEffect, useState } from 'react';

interface Step2Props {
    onSave: (data: any) => void;
}

const Step3: React.FC<Step2Props> = ({ onSave }) => {
    const [shift, setShift] = useState<string>('');

    useEffect(() => {
        const savedShift = localStorage.getItem('step1Shift');
        if (savedShift) {
            setShift(savedShift);
        }
    }, []);

    const generateTimeSlots = () => {
        const startTimeArray = shift === 'A' ? generateTimeArray(6, 18) : generateTimeArray(18, 30);
        return startTimeArray.map((time, index) => (
            <div key={index}>
                <label htmlFor={`record-${time}`} className='text-gray-900'>
                    {`${time} - ${getNextHour(time)}`}
                </label>
                <input
                    name={`record-${time}`}
                    type='text'
                    data-testid={`record-${time}`}
                    className='bg-gray-50 border mt-2 sm:mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-5  sm:pl-10 p-2.5'
                />
            </div>
        ));
    };

    const generateTimeArray = (start: number, end: number) => {
        const timeArray: string[] = [];
        for (let i = start; i < end; i++) {
            const hour = i >= 24 ? i - 24 : i;
            const formattedTime = `${hour.toString().padStart(2, '0')}00H`;
            timeArray.push(formattedTime);
        }
        return timeArray;
    };


    const getNextHour = (time: string) => {
        const hour = parseInt(time.slice(0, 2)) + 1;
        const nextHour = hour === 24 ? 0 : hour;
        const formattedNextHour = `${nextHour.toString().padStart(2, '0')}00H`;
        return formattedNextHour;
      };
      

    const handleSave = () => {
        const formData = {
            shift,
        };
        onSave(formData);
    };

    return (
        <div>
            <h2 className='text-black text-center my-2 sm:my-4'>Step 3</h2>
            <div>
                <h3 className='text-gray-900'>Record Entries:</h3>
                {generateTimeSlots()}
            </div>
            <button onClick={handleSave}>Save</button>
            <br />
        </div>
    );
};

export default Step3;
