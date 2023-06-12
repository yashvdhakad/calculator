import React from 'react'
import CalcDisplay from './CalcDisplay'
import CalcNums from './CalcNums'

const CalcFrame = () => {
  return (
    <div className='w-[400px] h-[700px] text-center rounded-xl bg-white shadow-md shadow-sky-900/60'>
        <CalcDisplay />
        <CalcNums />
    </div>
  )
}

export default CalcFrame