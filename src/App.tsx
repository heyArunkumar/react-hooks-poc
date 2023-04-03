import React, { useContext } from "react";
import "./App.css";
import ComponentC from "./Components/UseContext/ComponentC";
import UseEffectCom from "./Components/UseEffect/UseEffectCom";
import CounterOne from "./Components/UseReducer/CounterOne";
import FocusInput from "./Components/UseRef/FocusInput";
import HookTimer from "./Components/UseRef/HookTimer";

export const UserContext = React.createContext("");
export const EmailContext = React.createContext("");
function App() {
  return (
    <div className="App">
      <UseEffectCom />
      <UserContext.Provider value="Arun">
        <EmailContext.Provider value="arun@gmail.com">
          <ComponentC />
        </EmailContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      <FocusInput />
      <HookTimer />
    </div>
  );
}

export default App;
