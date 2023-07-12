import React, { createContext, useContext, useState } from "react";

type LoadingContextValue = {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextValue | undefined>(
  undefined
);

export const useLoading = (): LoadingContextValue => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

type LoadingProviderProps = {
  children: React.ReactNode;
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setLoading] = useState(false);

  const contextValue: LoadingContextValue = {
    isLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};
