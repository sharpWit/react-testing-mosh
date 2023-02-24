import React, { useState } from 'react'
import Main from './Main'
import AuthContext from './auth-context'

export default function App() {
    const [user, setUser] = useState({ id: 9 })
    return (
        <AuthContext.Provider value={user}>
            <Main />
        </AuthContext.Provider>
    )
}
