import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  return (
    <div className='about-main'>
      <div className='left'>
        <img src="/assets/img/image/entrance.JPG" alt="" />
      </div>
      <div className='right'>
        <h2>Welcome to <br></br> SMVEC School of Arts and Science</h2>
        <p>
          At SMVEC School of Arts and Science, we foster academic excellence and holistic development in the heart of the esteemed SMVEC campus in Madagadipet, Pondicherry. Our diverse academic community encompasses 12 vibrant departments offering 27 engaging undergraduate and postgraduate programs in Arts, Science, Commerce, Media Studies, and more.


        </p>
        <p>
          Founded in 2020 and affiliated with Pondicherry University, our college is equipped with modern classrooms, specialized laboratories, a central library, and vibrant student clubs to support both intellectual and personal growth .

        </p>
        <div className='area'>
          <h3 onClick={() => { navigate('/ug-programs') }}>Under-Graduate Program</h3>
          <p>
            Your UG journey begins with core learning and skill growth.
          </p>
          <h3 onClick={() => { navigate('/pg-programs') }}>Post-Graduate Program</h3>
          <p>PG path builds expertise and research focus.</p>



        </div>
        <button onClick={() => { navigate('/about-us') }}>More About</button>
      </div>
    </div>
  )
}

export default About