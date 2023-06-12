import React from 'react'

const CalcDisplay = () => {
  return (
    <div className='relative h-[120px] m-2 bg-sky-500 rounded-xl text-4xl text-white font-semibold shadow-inner shadow-sky-900'>
        <div className="m-2 absolute right-0 bottom-0 text-right">Your number will show here!</div>
    </div>
  )
}

export default CalcDisplay