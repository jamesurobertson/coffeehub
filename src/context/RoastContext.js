import React, { useState, createContext } from "react";

export const RoastContext = createContext(null);

export const RoastProvider = ({ children }) => {
  const [roastData, setRoastData] = useState(null);

  return (
    <RoastContext.Provider value={{ roastData, setRoastData }}>
      {children}
    </RoastContext.Provider>
  );
};
