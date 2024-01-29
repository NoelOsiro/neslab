import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import Step2 from '@/components/Form/FormStep2';

describe('Step2 Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    localStorage.clear();
    component = render(<Step2 />);
  });

  const getByTestId = (id: string) => component.getByTestId(id);
  const getByText = (text: string ) => component.getByText(text);
  const getSelectValue = (id: string) => (getByTestId(id) as HTMLSelectElement).value;
  const getInputValue = (id: string) => (getByTestId(id) as HTMLInputElement).value;

  test('renders correctly', () => {
    expect(getByText('Step 2')).toBeInTheDocument();
  });

  test('line input is initially empty', () => {
    expect(getSelectValue('line-select')).toBe('');
  });

  test('start time input is initially empty', () => {
    expect(getInputValue('start-select')).toBe('');
  });

  test('line input is rendered', () => {
    expect(getByTestId('line-select')).toBeInTheDocument();
  });

  test('startTime input is rendered', () => {
    expect(getByTestId('start-select')).toBeInTheDocument();
  });

  test('handles line change', () => {
    fireEvent.change(getByTestId('line-select'), { target: { value: '1' } });
    expect(getSelectValue('line-select')).toBe('1');
    expect(localStorage.getItem('step2Line')).toBe('1');
  });

  test('handles start time change', () => {
    fireEvent.change(getByTestId('start-select'), { target: { value: '0700H' } });
    expect(getInputValue('start-select')).toBe('0700H');
    expect(localStorage.getItem('step2Time')).toBe('0700H');
  });

  test('displays error for line when not selected', () => {
    fireEvent.change(getByTestId('line-select'), { target: { value: '' } });
    expect(getByText('Please select a line.')).toBeInTheDocument();
    expect(localStorage.getItem('step2Line')).toBeNull();
  });
  
  test.skip('displays error for start time when not selected', () => {
    fireEvent.change(getByTestId('start-select'), { target: { value: '' } });
    expect(getByText('Please select a Time.')).toBeInTheDocument();
    expect(localStorage.getItem('step2Time')).toBeNull();
  });
  
});
