import React from 'react'

const CalcNum = (props) => {
  return (
    props.numArr.map((num) => {
      return <div className='bg-sky-500 text-white py-2 text-5xl font-semibold rounded shadow shadow-sky-900/60 cursor-pointer active:shadow-md'>{num}</div>
    })
  )
}

export default CalcNum