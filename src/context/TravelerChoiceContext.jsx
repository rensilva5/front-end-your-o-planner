import { createContext, useState } from "react";

export const TravelerChoiceContext = createContext();

export function TravelerChoiceContextProvider({ children }) {
  const { Provider } = TravelerChoiceContext;
  const [countryChoice, setCountryChoice] = useState();

  const value = {
    countryChoice,
    setCountryChoice,
    
  };
  return <Provider value={value}>{children}</Provider>;
}
