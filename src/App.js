import React, { useState } from "react";
import "./App.css";
import Context from "./store";
import Auth from "./Auth";

const App = () => {

  const [isAuth, setIsAuth] = useState(false);

  function changeAuth() {
    setIsAuth(!isAuth);
    console.log(isAuth);
  }
  return (
    <div className="App">
      <Context.Provider value={{ isAuth, changeAuth }}>
        <Auth />
      </Context.Provider>
    </div>
  );
};

export default App;
