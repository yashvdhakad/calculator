import { useContext } from "react"
import numContext from "../context/numContext"

const CNum = (props) => {
  const ctxt = useContext(numContext)

  const clickHandler = () => {
    ctxt.setResult(ctxt.result.concat(props.num))
  }

  const clearHandler = () => {
    ctxt.setResult("")
  }

  const backspaceHandler = () => {
    ctxt.setResult(ctxt.result.slice(0, -1))
  }

  const calcHandler = () => {
    ctxt.setResult(eval(ctxt.result))
  }

  return (
    <div onClick={
      props.num === "Clear" ? clearHandler : clickHandler &&
        props.num === "C" ? backspaceHandler : clickHandler &&
          props.num === "=" ? calcHandler : clickHandler
    } className={`p-4 rounded shadow-sm shadow-black/20 cursor-pointer text-center select-none ${props.num === "Clear" || props.num === "C" ? "col-span-2" : ""}`}>{props.num}</div>
  )
}

export default CNum