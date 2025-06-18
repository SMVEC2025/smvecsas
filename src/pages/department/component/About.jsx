import React from 'react'
import { useNavigate } from 'react-router-dom'

function About({data}) {
  const navigate = useNavigate();
    const handleNavigate=()=>{
       navigate(`/faculty/${data.heading}`)
    }
  return (
    <div className='ug-about'>
        <div className='left'>
         <img src={data.image} alt="" />
        </div>
        <div className='right'>
            <h3>{data.heading}</h3>
            <p>
              {data.para}
            </p>
            <button  onClick={handleNavigate}>faculties</button>
            <button>Events</button>
        </div>
    </div>
  )
}

export default About