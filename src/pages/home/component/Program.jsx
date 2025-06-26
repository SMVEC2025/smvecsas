import React from 'react'
import { useNavigate } from 'react-router-dom'

function Program({programDetail}) {
  const navigate = useNavigate();
  const handleProgramClick=(program)=>{
    navigate(`/program/${program.name}`)
  }
  return (
    <div className='home-program' >
        <div className='overlay'></div>
      <div className='left'>
        <h2>Explore our Academic<br></br> Programs</h2>
        <p>Choose from 16 undergraduate and graduate majors</p>
      </div>
      <div className='right'>
        {programDetail?.map((program,index)=>(
          <div key={program.id} onClick={()=>{handleProgramClick(program)}}>
            {program.name}
          </div>
        ))}
    
      </div>
    </div>
  )
}

export default Program