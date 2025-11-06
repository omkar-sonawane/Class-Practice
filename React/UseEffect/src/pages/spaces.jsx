import React, { useEffect, useState } from 'react'

const Spaces = ({id,value,target,setTarget}) => {
    const [spc,setSpc] = useState("- -")

    useEffect(()=>{
        if(target == id){
            setSpc(value)
            setTarget(-1)
        }
    })

  return (
    <div className='preview-card'>
        <div>Sapcess</div>
        <span className='value'>{spc}</span>
        <span>{value}</span>
      
    </div>
  )
}

export default Spaces
