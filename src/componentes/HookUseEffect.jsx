import React, { useEffect, useState } from "react";

const HookUseEffect = () => {

  useEffect(() => {
    console.log("executando!")
  })

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  }
  useEffect(() => {
    console.log("executa uma única vez!");
  },[])
  const [anotherNumber, setAnotherNumber] = useState(1);
  useEffect(() => {
    console.log("executa apenas quando anotherNumber muda!")
  },[anotherNumber])

  const changeAnotherNumber = () => {
    setAnotherNumber(Math.random());
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Olá Mundo");
      setAnotherNumber(number + 1);
    }, 2000);
    return (() => clearTimeout(timer))
  },[anotherNumber, number]);
  return (
    <>
      <div>Hook UseEffect</div>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={changeAnotherNumber}>Mudar anotherNumber</button>
    </>
  )
}

export default HookUseEffect;