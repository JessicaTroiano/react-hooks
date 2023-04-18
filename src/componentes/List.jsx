import React, {useEffect, useState} from "react";

const Lista = ({getItens}) => {
  const [myItens, setMyItens] = useState([]);
  useEffect(() => {
    console.log("Buscando itens do DB");
    setMyItens(getItens)
  }, [getItens])
  return (
    <>
      <div>{myItens.map((item) => (
        <p key={item}>{item}</p>
      ))}</div>
    </>
  )
}

export default Lista;