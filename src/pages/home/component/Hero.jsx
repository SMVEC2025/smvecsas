import { useState, useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import video from '/assets/video/video.mp4'
import TextLooper from './TextLooper'
import { useNavigate } from "react-router-dom";


function Hero() {
  const [showVideo, setShowVideo] = useState(true)
 const navigate = useNavigate()

  return (
    <div className='hero-main'>
      <div className="overlay"></div>
       <video
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      <div className="content">

        <h2>welcome to the</h2>
        <h1>best arts and science College</h1>
        <h4>In</h4>

        <h4><TextLooper /></h4>

        <div className="subtitle">A place with diverse nationalities, cultures and ideas</div>
        <button onClick={()=>{navigate('/admission')}}>Start your application</button>

      </div>
    </div>
  )
}

export default Hero