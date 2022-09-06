import { createContext, useState } from "react";

export const UserChoiceContext = createContext({})

export function UserChoiceContext({ children }) {
    const {Provider} = UserChoiceContext
    const [bestFor, setBestfor] = useState()
    const [type, setType] = useState()
    cosnt [user, setUser] = useState()

    const value = {
        bestFor,
        setBestfor,
        type,
        setType,
        user,
        setUser,
    }
    return <Provider value={value}>{children}</Provider>
}