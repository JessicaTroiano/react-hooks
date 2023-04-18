import React, {useState} from "react";

const HookUseState = () => {
  let userName = "maria";
  const [name, setName] = useState("maria");

  const getName = () => {
    userName = "José";
    setName("Maria José");
  }
  //state altera o nome diretamente na tela/componente, pois estimula sua re-renderização.
  return(
      <>
      <div>
        <h2>Use State</h2>
        <p>Variavel: {userName}</p>
        <p>Variável: {name}</p>
        <button onClick={getName}>Botão</button>
      </div>
      <hr/>
      </>
  )
}

export default HookUseState;