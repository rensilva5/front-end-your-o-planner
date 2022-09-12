import { createContext, useState } from "react"

export const DestinationsContext = createContext()

export function DestinationContextProvider({ children }) {
    const { Provider } = DestinationsContext
    const [destination, setDestination] = useState([])
    const [addForm, setAddForm] = useState({});

    const value = {
        destination,
        setDestination,
        addForm, setAddForm
    }
    return <Provider value={value}>{children}</Provider>
}
