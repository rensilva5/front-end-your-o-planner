import { createContext, useState } from "react"

export const DestinationsContext = createContext()

export function DestinationContextProvider({ children }) {
    const { Provider } = DestinationsContext
    const [place, setPlace] = useState()

    const value = {
        place,
        setPlace,
    }
    return <Provider value={value}>{children}</Provider>
}
