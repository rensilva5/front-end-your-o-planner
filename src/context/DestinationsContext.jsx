import { createContext, useState } from "react"

export const DestinationsContext = createContext()

export function DestinationContextProvider({ children }) {
    const { Provider } = DestinationsContext
    const [destination, setDestination] = useState([])

    const value = {
        destination,
        setDestination,
    }
    return <Provider value={value}>{children}</Provider>
}
