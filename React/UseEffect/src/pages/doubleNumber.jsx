import React, { useEffect, useState } from 'react'

const DoubleNumber = ({id,value,target,setTarget}) => {
    const [num,setNum]= useState(0)

    useEffect(()=>{
        if (target == id){
            setNum(num + Number(value))
            setTarget(-1)
        }
    },[target])

  return (
    <div className='preview-card'>
        <div>number + 2</div>
        <span className='value'>{num}</span>
        <span>{value}</span>
      
    </div>
  )
}

export default DoubleNumber
