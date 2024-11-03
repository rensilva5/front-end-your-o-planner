import { createContext, useState } from "react";

export const TravelerChoiceContext = createContext();

export function TravelerChoiceContextProvider({ children }) {
  const [countryChoice, setCountryChoice] = useState(null); // Initialize state with a default value

  const value = {
    countryChoice,
    setCountryChoice,
  };

  return (
    <TravelerChoiceContext.Provider value={value}>
      {children}
    </TravelerChoiceContext.Provider>
  );
}
