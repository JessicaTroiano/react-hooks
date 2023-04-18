import React, {useContext} from "react";
import { someContext } from "../componentes/HookUseContext";

const Sobre = () => {
  const {contextValue} =useContext(someContext);
    return (
      <>
        <h1>Teste</h1>
        <div>
          <h2>UseContext</h2>
          <p>Valor do Context: {contextValue}</p>
        </div>
      </>
    )
}

export default Sobre;