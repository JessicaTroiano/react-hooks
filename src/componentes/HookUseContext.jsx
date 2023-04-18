import React, {createContext } from "react";

export const someContext = createContext()

const HookUseContext = ({children}) => {

  const contextValue = "Testando o contexto!";
  return (
    <someContext.Provider value={{contextValue}}>
      {children}
    </someContext.Provider>
  )
}

export default HookUseContext;