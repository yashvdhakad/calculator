import { useState } from "react";
import numContext from "./numContext";

const NumState = (props) => {
  const [state, setState] = useState("Your text will show here:");

  return (
    <numContext.Provider value={{state, setState}}>
        {props.children}
    </numContext.Provider>
  )
}

export default NumState