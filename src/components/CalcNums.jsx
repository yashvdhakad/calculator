import React from 'react'
import CalcNum from './CalcNum'

const CalcNums = (props) => {
    return (
        <div className='grid grid-cols-3 gap-2 px-2'>
            <CalcNum numArr={props.numArr} setNum={props.setNum} />
        </div>
    )
}

export default CalcNums