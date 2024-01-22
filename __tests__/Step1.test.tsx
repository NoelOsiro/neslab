import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import Step1 from '@/components/Form/FormStep1';
import '@testing-library/jest-dom';

describe('Step1 Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    localStorage.clear();
    component = render(<Step1 />);
  });

  const getByTestId = (id: string) => component.getByTestId(id);
  const getSelectValue = (id: string) => (getByTestId(id) as HTMLSelectElement).value;
  const getInputValue = (id: string) => (getByTestId(id) as HTMLInputElement).value;

  test('inputs render correctly', () => {
    expect(getByTestId('date-select')).toBeInTheDocument();
    expect(getByTestId('shift-select')).toBeInTheDocument();
  });

  test('date input is readonly and has today\'s date', () => {
    const dateInput = getByTestId('date-select') as HTMLInputElement;

    expect(dateInput).toHaveAttribute('readonly');
    expect(dateInput.value).toBe(new Date().toISOString().split('T')[0]);
  });

  test('handles shift change', () => {
    fireEvent.change(getByTestId('shift-select'), { target: { value: 'A' } });

    expect(getSelectValue('shift-select')).toBe('A');
    expect(localStorage.getItem('step1Shift')).toBe('A');
  });
});

describe('Step1 Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('data persists on refresh', () => {
    // Manually set localStorage before rendering component
    localStorage.setItem('step1Shift', 'B');
    const { getByTestId } = render(<Step1 />);
    const shiftSelect = getByTestId('shift-select') as HTMLSelectElement;
    expect(shiftSelect.value).toBe('B');
  });

});

