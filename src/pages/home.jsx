import React, {useContext} from "react";
import HookUseEffect from "../componentes/HookUseEffect";
import HookUseReducer from "../componentes/HookUseReducer";
import UseStateHook from '../componentes/HookUseState';
import { someContext } from "../componentes/HookUseContext";
import HookUseRef from "../componentes/HookUseRef";
import HookUseCallBack from "../componentes/HookUseCallBack";
import HookUseMemo from "../componentes/HookUseMemo";
import HookUseLayoutEffect from "../componentes/HookUseLayoutEffect";

const Home = () => {
  const {contextValue} =useContext(someContext);
    return (
      <>
      <h1>Teste</h1><div><UseStateHook /></div>
      <div>
        <HookUseReducer />
      </div>
      <div>
        <HookUseEffect />
      </div>
      <div>
        <h2>UseContext</h2>
        <p>Valor do Context: {contextValue}</p>
      </div>
      <div>
        <HookUseRef />
      </div>
      <div>
        <HookUseCallBack />
      </div>
      <div>
        <HookUseMemo />
      </div>
      <div>
        <HookUseLayoutEffect />
      </div>
      </>
    )
}

export default Home;