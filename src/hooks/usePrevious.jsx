import {useRef, useEffect, useDebugValue} from "react";

const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("Custom Hook e useDebugValue")
  useDebugValue("O número anterior é: " + value)

  useEffect(() => {
    ref.current = value;
  })
  return ref.current;
}

export default usePrevious;