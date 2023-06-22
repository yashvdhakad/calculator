import { useContext } from "react"
import numContext from "../context/numContext"

const CNum = (props) => {
  const text = useContext(numContext)

  const clickHandler = () => {
    text.setState(props.num)
  }

  return (
    <div onClick={clickHandler} className="w-fit py-2 px-4 border rounded shadow-sm shadow-black/20 cursor-pointer select-none">{props.num}</div>
  )
}

export default CNum