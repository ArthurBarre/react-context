import React, { useContext } from "react";
import Context from "./store";
import "./App.css";
const Auth = () => {
  const { isAuth, changeAuth } = useContext(Context);
  return (
    <>
      <div className={isAuth ? "connected" : "disconnected"}>
        {isAuth ? "vous etes connectée" : "Vous n'etes pas connectée"}
      </div>
      <button onClick={changeAuth}>Me connecter</button>
    </>
  );
};
export default Auth;
