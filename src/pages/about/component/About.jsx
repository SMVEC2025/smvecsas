import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  return (
    <div className='ug-about'>
        <div className='left'>
         <img src="https://smvec.ac.in/wp-content/uploads/2024/06/Sri_Manakula_Vinayagar_Engineering_College.webp" alt="" />
        </div>
        <div className='right'>
            <h3>About SSAS</h3>
            <p>
              Sri Manakula Vinayagar School of Arts and Science College creates an exceptional learning environment for the students that promote the communication skills and personality development of learners. It also takes initiatives to impart knowledge outside the curriculum and provide need-based training programs. SAS provides a foundation of computing principles and business practices for effectively using/managing information systems and enterprise software. Students are trained with the awareness of mass media and its importance. Students are trained towards better understanding of their core discipline by sharpening their creativity apart from learning the concepts, theories and aesthetics.
            </p>
            <p>
              The state-of-the-art infrastructure at the college includes well-ventilated classrooms with projectors, separate and well-equipped laboratories, a well-furnished central library, sports facilities, and health facilities. These facilities help to enhance students’ overall development and equip them with problem-solving skills, creative talent, and communication skills. They also serve to educate, train, and develop highly competent graduates who can provide solutions to improve the quality of human life and the environment. The infrastructure also helps to train skilled manpower who can succeed in the ever-growing industries.
            </p>
            <button onClick={()=>{navigate('/about/history')}}>our History</button>
            <button onClick={()=>{navigate('/faculty')}}>Faculties</button>
        </div>
    </div>
  )
}

export default About