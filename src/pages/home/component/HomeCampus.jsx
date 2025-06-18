import React from 'react'
import VideoPlayer from './VidePlayer'
import { useNavigate } from 'react-router-dom'

function HomeCampus() {
  const navigate = useNavigate();
  return (
    <div className='home_campus-main'>
       <div className='content'>
        <div className='left'>
         <h1>Your Campus, Designed for You</h1>
         <h3>More than just buildings — they’re <br />spaces that inspire growth, learning, and community.</h3> <p>Designed to support every aspect of student life, our campus offers state-of-the-art facilities rooted in a commitment to academic excellence, innovation, and student well-being. From collaborative study spaces and high-tech labs to comfortable residence halls and wellness centers, every corner of our campus is built with purpose. Whether you're diving into research, staying active, or finding quiet reflection, our facilities empower you to thrive in a dynamic and supportive environment.</p>
        </div>
        <div className='right'>
           <h4>Explore our campus</h4>
           <p onClick={()=>{navigate('/campus')}}>Campus Facilities</p>
           <p>Lab Facilities</p>
        </div>
       </div>
       <div className='videoplayer'>
                <VideoPlayer/>
                <div className='background'>

                </div>
                  <div className='backgroundd'>

                </div>
       </div>
    </div>
  )
}

export default HomeCampus