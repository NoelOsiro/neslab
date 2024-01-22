// Step1.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Step1 from '@/components/Form/FormStep1';
import '@testing-library/jest-dom';


describe('Step1 Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('inputs render correctly', () => {
    const { getByTestId } = render(<Step1 />);
    expect(getByTestId('date-select')).toBeInTheDocument();
    expect(getByTestId('shift-select')).toBeInTheDocument();
  });

  test('date input is readonly and has today\'s date', () => {
    const { getByTestId } = render(<Step1 />);
    const dateInput = getByTestId('date-select') as HTMLInputElement;

    expect(dateInput).toHaveAttribute('readonly');
    expect(dateInput.value).toBe(new Date().toISOString().split('T')[0]);
  });

  test('handles shift wchange', () => {
    const { getByTestId } = render(<Step1 />);
    const shiftSelect = getByTestId('shift-select') as HTMLSelectElement;

    fireEvent.change(shiftSelect, { target: { value: 'A' } });

    expect(shiftSelect.value).toBe('A');
    expect(localStorage.getItem('step1Shift')).toBe('A');
  });

  test('data persists on refresh', () => {
    // Manually set localStorage before rendering component
    localStorage.setItem('step1Shift', 'B');
    const { getByTestId } = render(<Step1 />);
    const shiftSelect = getByTestId('shift-select') as HTMLSelectElement;
    expect(shiftSelect.value).toBe('B');
  });


});
