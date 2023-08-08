import { useNavigate } from "react-router-dom";
import { useLocalState } from "../../util/useLocalStorage";
import jwt_decode from 'jwt-decode';
import { useEffect } from "react";

const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    if (jwt == "") {
      navigate("../login");
    }
  }, [jwt])

  if (jwt != "") {
    const decoded: any = jwt_decode(jwt);
    if (Date.now() >= decoded.exp * 1000) {
      setJwt("")
    }
  }

  return children
};

export default PrivateRoute
