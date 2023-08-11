import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalState } from "../util/useLocalStorage"
import User from "../models/user"

type PropsUserContext = {
  authenticateUser: (username: string, password: string, company_id: string) => void,
  user: User,
  error: string
}

const DEFAULT_VALUE = {
  authenticateUser: () => { },
  user: new User(),
  error: ""
}

export const AuthContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const AuthContextProvider = ({ children }: any) => {

  const [jwt, setJwt] = useLocalState("", "jwt");
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<User>(new User());

  useEffect(() => {
    if (jwt != "") {
      navigate(`/company/${user.company?.id}`);
    }
  }, [jwt]);

  let navigate = useNavigate();

  const authenticateUser = async (username: string, password: string) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "user": {
        "email": username,
        "password": password
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: headers,
      body: raw
    };

    const response = await fetch("http://127.0.0.1:3001/login", requestOptions);
    if (response.status == 200) {
      const data = (await response.json()).status.data;
      setUser(data.user);

      const auth = response.headers.get('Authorization') || "";
      setJwt(auth.split(" ")[1]);
    }
    else {
      setError(response.statusText);
    }
  }

  return (
    <AuthContext.Provider value={{ authenticateUser, user, error }}>
      {children}
    </AuthContext.Provider>
  )
}
