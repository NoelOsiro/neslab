// MultiStepForm.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import MultiStepForm from '@/components/Form/MultiStepForm';


describe('MultiStepForm Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders correctly', () => {
        const { getByText } = render(<MultiStepForm />);
        expect(getByText('Multi-Step Form')).toBeInTheDocument();
    });

    test('renders Step1 by default', () => {
        const { getByText } = render(<MultiStepForm />);
        expect(getByText('Step 1')).toBeInTheDocument();
    });

    test('renders Next buttons', () => {
        const { getByText } = render(<MultiStepForm />);
        const nextButton = getByText('Next');
        expect(nextButton).toBeInTheDocument();
    });

    test('renders Previous buttons', () => {
        const { getByText } = render(<MultiStepForm />);
        const nextButton = getByText('Next');
        fireEvent.click(nextButton); // Move to Step 2
        expect(getByText('Previous')).toBeInTheDocument();
    });

    test('clicking Next button increments step', () => {
        const { getByText } = render(<MultiStepForm />);
        const nextButton = getByText('Next');
        fireEvent.click(nextButton);
        expect(getByText('Step 2')).toBeInTheDocument();
    });

    test('clicking Previous button decrements step', () => {
        const { getByText } = render(<MultiStepForm />);
        const nextButton = getByText('Next');
        fireEvent.click(nextButton); // Move to Step 2
        const previousButton = getByText('Previous');
        fireEvent.click(previousButton);
        expect(getByText('Step 1')).toBeInTheDocument();
    });

    test('Previous button should not be present on first step', () => {
        const { getByText, queryByText } = render(<MultiStepForm />);
        expect(getByText('Step 1')).toBeInTheDocument();
        expect(getByText('Next')).toBeInTheDocument();
        expect(queryByText('Previous')).toBeNull();;
    });

    test('data persists on previous button click', () => {
        // Manually set localStorage before rendering component
        localStorage.setItem('currentStep', '1');
        localStorage.setItem('step1Shift', 'A');
        const { getByTestId, getByText } = render(<MultiStepForm />);
        const shiftSelect = getByTestId('shift-select') as HTMLSelectElement;
        const nextButton = getByText('Next');
        fireEvent.click(nextButton); // Move to Step 2
        const previousButton = getByText('Previous');
        fireEvent.click(previousButton);
        // Validate that the value comes from localStorage
        expect(shiftSelect.value).toBe('A');


        // Validate that the value still comes from localStorage after going back
        expect(shiftSelect.value).toBe('A');
    });
});
