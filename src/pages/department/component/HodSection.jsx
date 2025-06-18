import React from 'react'

function HodSection({HodData}) {
  return (
    <div className='hod_main'>
        <div className='container'>
        <div className='left'>
             <img src={`${HodData.image}`} alt="" />
             <h3>{HodData.name}</h3>
             <p>Head of the Deparrtment</p>
        </div>
        <div className='right'>
            <h2 style={{fontWeight:"400"}}>Welcome Message</h2>
            <p>{HodData.message}</p>
        </div>
        </div>
    </div>
  )
}

export default HodSection