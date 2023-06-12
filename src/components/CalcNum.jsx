import React from 'react'

const CalcNum = (props) => {
  return (
    props.numArr.map((num) => {
      return <div key={num} className={`bg-sky-700 text-sky-200 py-2 text-4xl font-semibold rounded shadow-inner shadow-sky-900 cursor-pointer active:shadow-md ${num === "Reset" ? "col-span-3 bg-red-700 shadow-red-900" : ""} ${num === 0 ? "col-span-3" : ""}`} onClick={() => {
        num === "+" || num === "-" || num === "*" || num === "/" || num === "√" || num === "%" ? props.setNum("Enter num babe!!") : props.setNum(num);
        num === "Reset" ? props.setNum("") : "";
        
      }}>{num}</div>
    })
  )
}

export default CalcNum