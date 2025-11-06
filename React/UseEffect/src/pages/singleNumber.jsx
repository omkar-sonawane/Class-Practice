import React, { useEffect, useState } from 'react'

const SingleNumber = ({id,value,target,setTarget}) => {

    const [num, setNum] = useState(0)

    const handleProcess = () => {
        if(target == id){
            console.log("singggggggglll")

            setNum(num + Number(value));
            
            setTarget("-1");
        }
    } ;


    useEffect(handleProcess,[target])

  return (
    <div className='preview-card'>
        <div>number + 1</div>
        <span className='value'>{num}</span>
        <span>{value}</span>
      
    </div>
  )
}

export default SingleNumber;
