import React, { useEffect, useState } from 'react'
import { ProgramData } from '../../../data/ProgramData'
import { useNavigate } from 'react-router-dom';
function Programs() {

  const [ugProgram,setUgProgram] = useState()
  const [pgProgram,setPgProgram] = useState()
  const navigate = useNavigate();

  useEffect(() => {
     const filterUG = ProgramData?.filter((e)=> e.category == "UG")
     setUgProgram(filterUG)
     const filterPG = ProgramData?.filter((e)=> e.category == "PG")
     setPgProgram(filterPG)
  }, [])
  

  const handleProgramClick=(program)=>{
    navigate(`/program/${program.name}`)
  }
  return (
    <div className='admission_profram-main'>
      <h2>UG PROGRAMS</h2>
        <div className='program-container'>
          {ugProgram?.map((e,i)=>(
            <div key={i} className='con'  onClick={()=>handleProgramClick(e)}>
            <img src={e.icon} alt="" />
            <h2>{e.name}</h2>

          </div>
          ))}
          
        </div>
      <h2 className='mt-100'>PG PROGRAMS</h2>

        <div className='program-container'>
          {pgProgram?.map((e,i)=>(
            <div key={i} onClick={()=>handleProgramClick(e)} className='con'>
            <img src={e.icon} alt="" />
            <h2>{e.name}</h2>

          </div>
          ))}
        </div>
    </div>
  )
}

export default Programs
