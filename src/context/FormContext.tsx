// FormContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface FormState {
  step: number;
  data: {
    date: string;
    shift: string;
    startTime: string;
    line: string;
  };
  errors: {
    shift: string | null;
    startTime: string | null;
    line: string | null;
  };
}

interface FormContextProps {
  state: FormState;
  dispatch: React.Dispatch<any>;
}
const getCurrentDate = (): string => {
  const now = new Date();
  return now.toISOString().split('T')[0]; // You can format the date as needed
};

const initialState: FormState = {
  step: 1,
  data: {
    date: getCurrentDate(),
    shift: '',
    startTime: '',
    line: '',
  },
  errors: {
    shift: null,
    startTime: null,
    line: null,
  },
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

const formReducer = (state: FormState, action: any) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_DATA':
      return { ...state, data: { ...state.data, ...action.payload } };
    case 'SET_ERRORS':
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useFormContext };
