import React from 'react'
import { useNavigate } from 'react-router-dom'

function VirtualTourHeader() {
  const navigate = useNavigate()
  return (
    <div className='vt-header'>
      <img className='left' src="/assets/img/logo/smveclogo.png" alt="" />
       <div className='right'>
        <button onClick={()=>{navigate('/admission')}}  className='apply_btn'>Apply Now</button><button className='home_btn'>Back</button>
       </div>
    </div>
    //  <div className='home' >
    //             <button><IoMdHome className='icon' /><span>Home</span></button>
    //         </div>
  )
}

export default VirtualTourHeader