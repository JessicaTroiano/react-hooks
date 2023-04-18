import React from "react";
import HookUseEffect from "../componentes/HookUseEffect";
import HookUseReducer from "../componentes/HookUseReducer";
import UseStateHook from '../componentes/HookUseState';

const Home = () => {
    return (
      <>
      <h1>Teste</h1><div><UseStateHook /></div>
      <div>
        <HookUseReducer />
      </div>
      <div>
        <HookUseEffect />
      </div>
      </>
    )
}

export default Home;