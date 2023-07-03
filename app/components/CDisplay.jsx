import { useContext } from "react"
import numContext from "../context/numContext"

const CDisplay = () => {
    const ctxt = useContext(numContext)

    return (
        <div className="h-20 px-4 bg-slate-400 rounded shadow shadow-black/20 text-4xl font-bold text-zinc-600 flex justify-end items-center">{ctxt.result}</div>
    )
}

export default CDisplay