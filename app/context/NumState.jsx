import { useState } from "react";
import numContext from "./numContext";

const NumState = (props) => {
  const [result, setResult] = useState("");

  return (
    <numContext.Provider value={{result, setResult}}>
        {props.children}
    </numContext.Provider>
  )
}

export default NumState