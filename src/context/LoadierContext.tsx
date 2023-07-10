import React, { createContext, useContext, useState } from "react";

// Create a new context for the loading state
const LoadingContext = createContext();

// Custom hook to access the loading state
export const useLoading = () => useContext(LoadingContext);

// Loading state provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  // Provide the loading state and setLoading function through context
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
