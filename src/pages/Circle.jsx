import React, { useState } from 'react'
import './Circle.css'

const Circle = ({item}) => {
    const [visible, setVisible] = useState(false);
    console.log(visible)
  return (
      <div>
    <div className='Circle' style={{marginLeft:`${item.coords[0]}px`, marginTop:`${item.coords[1]}px`, opacity: 0}} onClick={() => setVisible(!visible)}>OFF</div>
    {visible && (<img src={item.href} onMouseLeave={() => setVisible(!visible)} alt={item.id}/>)}
  </div>
  )
}

export default Circle