import React from 'react'
import CalcNum from './CalcNum'

const CalcNums = () => {
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <div className='grid grid-cols-3 gap-2 px-2'>
            <CalcNum numArr={numArr} />
        </div>
    )
}

export default CalcNums