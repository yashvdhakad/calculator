import { useContext } from "react"
import numContext from "../context/numContext"

const CDisplay = () => {
    const text = useContext(numContext)

    return (
        <div className="w-full h-1/6 rounded shadow shadow-black/20 text-2xl text-zinc-600 flex justify-center items-center">{text.state}</div>
    )
}

export default CDisplay