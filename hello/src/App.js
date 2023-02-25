import React, { useState } from "react";
import "./App.css";
import Main from "./Components/auth/Main";
import AuthContext from "./Components/auth/auth-context";

export default function App() {
  const [user, setUser] = useState({ id: 1 });
  return (
    <>
      <AuthContext.Provider value={user}>
        <Main />
      </AuthContext.Provider>
    </>
  );
}
