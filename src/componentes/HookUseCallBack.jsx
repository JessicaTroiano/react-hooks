import React, {useCallback, useState} from "react";
import Lista from "./List";

const HookUseCallBack = () => {
  const [counter, setCounter] = useState(0);
  const getItemsFromDatabase = useCallback(() => {
      return ["a", "b", "c"]
},[])


return (
    <>
    <h2>UseCallBack</h2>
    <Lista getItens={getItemsFromDatabase} />
    <button onClick={() => setCounter(counter + 1)}>Alterar</button>
    <p>{counter}</p>
    <hr/>
    </>
  )
}

export default HookUseCallBack;