import React from 'react'

const CalcDisplay = (props) => {
  return (
    <div className='relative h-[120px] m-2 bg-sky-700 rounded-xl text-5xl text-sky-200 font-semibold shadow-inner shadow-sky-900'>
        <div className="m-2 absolute right-0 bottom-0 text-right">{props.num}</div>
    </div>
  )
}

export default CalcDisplay