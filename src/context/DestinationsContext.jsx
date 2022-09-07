import { createContext, useState } from "react"

export const DestinationContext = createContext

export function DestinationContextProvider({ children }) {
    const { Provider } = DestinationContext
    const [destinations, setDestinations] = useState

    const value = {
        destinations,
        setDestinations,
    }
}

return <Provider value={value}>{children}</Provider>