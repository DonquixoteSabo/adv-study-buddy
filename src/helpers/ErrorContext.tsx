import React, { createContext, useState } from 'react';

interface IErrorContext {
  error: null | string;
  addError: (x: string) => void;
  removeError: () => void;
}

export const ErrorContext = createContext<IErrorContext>({
  error: null,
  addError: () => {},
  removeError: () => {},
});

const ErrorContextProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<null | string>(null);

  const removeError = () => setError(null);

  const addError = (message: string) => setError(message);

  return (
    <ErrorContext.Provider
      value={{
        error,
        removeError,
        addError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
