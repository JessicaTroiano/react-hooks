import React, {useEffect, useState, useRef} from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  // roda o useEffect a cada vez que há uma atualização no componente!
  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  })

  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    inputRef.current.focus();
  }
  return (
    <>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB+1)}>Contador B</button>
      <hr/>
      <form onClick={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value) }></input>
        <input type="submit" value="Enviar" />
      </form>
      <hr/>
    </>
  )
}

export default HookUseRef;