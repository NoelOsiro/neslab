// Step2.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Step2 from '@/components/Form/FormStep2';

describe('Step2 Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  
  test('renders correctly', () => {
    const { getByText } = render(<Step2 />);
    expect(getByText('Step 2')).toBeInTheDocument();
  });

  test('line input is rendered', () => {
    const { getByTestId } = render(<Step2 />);
    const lineInput = getByTestId('line-select') as HTMLInputElement;
    expect(lineInput).toBeInTheDocument();
  });

  test('handles line change', () => {
    const { getByTestId } = render(<Step2 />);
    const lineSelect = getByTestId('line-select') as HTMLSelectElement;

    fireEvent.change(lineSelect, { target: { value: '1' } });

    expect(lineSelect.value).toBe('1');
    expect(localStorage.getItem('step2Line')).toBe('1');
  });
});
