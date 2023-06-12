import React, { useState } from 'react'
import CalcDisplay from './CalcDisplay'
import CalcNums from './CalcNums'

const CalcFrame = () => {
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,  "+", "-", "*", "/", "%", "√", "Reset"]

    const [num, setNum] = useState("Nums are here baby!")

    return (
        <div className='w-[400px] h-[700px] text-center rounded-xl bg-slate-800 shadow-lg shadow-sky-900/60 border border-sky-900 transition-all'>
            <CalcDisplay num={num} />
            <CalcNums numArr={numArr} setNum={setNum} />
        </div>
    )
}

export default CalcFrame