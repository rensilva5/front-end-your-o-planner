import { createContext, useState } from "react";

export const TravelerChoiceContext = createContext({})

export function TravelerChoiceContextProvider({ children }) {
    const {Provider} = TravelerChoiceContext
    const [bestFor, setBestfor] = useState()
    const [country, setCountry] = useState()
    // const [user, setUser] = useState()

    const value = {
        bestFor,
        setBestfor,
        country,
        setCountry,
        // user,
        // setUser,
    }
    return <Provider value={value}>{children}</Provider>
}