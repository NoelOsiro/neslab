import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, act, RenderResult } from '@testing-library/react';
import { act as domAct } from 'react-dom/test-utils'; // Importing act from react-dom/test-utils

import Step3 from '@/components/Form/FormStep3';

describe('Step3 Component', () => {
  let component: RenderResult;
  const mockOnSave = jest.fn();

  beforeEach(() => {
    localStorage.clear();
    component = render(<Step3 onSave={mockOnSave} />);
  });

  const getByTestId = (id: string) => component.getByTestId(id);
  const getByText = (text: string) => component.getByText(text);
  const queryByTestId = (id: string) => component.queryByTestId(id);

  test('displays record entries for shift A', async () => {
    localStorage.setItem('step1Shift', 'A');

    await act(async () => {
      component.rerender(<Step3 onSave={mockOnSave} />);
    });

    await waitFor(() => {
      // Assuming the generated time slots are displayed based on the shift
      expect(queryByTestId('record-0600H')).toBeInTheDocument();
      expect(queryByTestId('record-0700H')).toBeInTheDocument();
      // Add more expectations for other time slots
    });
  });

  test('handles save correctly for shift A', async () => {
    localStorage.setItem('step1Shift', 'A');

    await act(async () => {
      component.rerender(<Step3 onSave={mockOnSave} />);
    });

    fireEvent.click(getByText('Save'));

    await waitFor(() => {
      // Assuming that onSave is called with the correct data for shift A
      expect(mockOnSave).toHaveBeenCalledWith({ shift: 'A' });
    });
  });

  test('handles save correctly for shift B', async () => {
    localStorage.setItem('step1Shift', 'B');

    await act(async () => {
      component.rerender(<Step3 onSave={mockOnSave} />);
    });

    fireEvent.click(getByText('Save'));

    await waitFor(() => {
      // Assuming that onSave is called with the correct data for shift B
      expect(mockOnSave).toHaveBeenCalledWith({ shift: 'B' });
    });
  });
});
