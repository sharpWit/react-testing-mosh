import React, { useEffect } from "react";
import { get, HttpClient } from "./Services/http-client";
const httpClient = new HttpClient();

export default function App() {
  useEffect(() => {
    httpClient
      .get("posts", {
        params: {
          id: 2,
        },
      })
      .then((response) => console.log(response));
  }, []);
  return <div></div>;
}

// import "./App.css";
// import Main from "./Components/auth/Main";
// import AuthContext from "./Components/auth/auth-context";

// export default function App() {
//   const [user, setUser] = useState({ id: 1 });
//   return (
//     <>
//       <AuthContext.Provider value={user}>
//         <Main />
//       </AuthContext.Provider>
//     </>
//   );
// }
// const httpCilent = new HttpClinet()
