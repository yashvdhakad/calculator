import React from 'react'

const CalcNum = (props) => {
  return (
    props.numArr.map((num) => {
      return <div key={num} className='bg-sky-500 text-white py-2 text-4xl font-semibold rounded shadow-inner shadow-sky-900 cursor-pointer active:shadow-md' onClick={() => {props.setNum(num)}}>{num}</div>
    })
  )
}

export default CalcNum