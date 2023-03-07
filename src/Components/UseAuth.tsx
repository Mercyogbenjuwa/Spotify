import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const UseAuth = (): boolean => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    const client = new Keycloak({
      url: process.env.REACT_APP_KEYCLOAK_URL!,
      realm: process.env.REACT_APP_KEYCLOAK_REALM!,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID!,
    });
    client
      .init({ onLoad: "login-required" })
      .then((res) => {
        if (!res) {
          console.log(res);
          setLogin(true);
        } else {
          setLogin(res);
        }
      })
      .catch((e) => setLogin(false));
  }, []);

  return isLogin;
};

export default UseAuth;
