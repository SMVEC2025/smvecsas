import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';

function Faculty({ dept }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/faculty/${dept}`)
  }
  return (
    <div className='container dept-faculty-main'>
      <Header title="faculty" />
      <p>
        At SMVEC's School of Arts and Science (SAS), we believe that a strong and inspiring teaching environment is the foundation of academic excellence. Our dedicated faculty members play a pivotal role in creating enriching learning experiences that shape the academic and personal growth of our students. The leadership at SMVEC SAS is committed to fostering a culture where quality teaching, student-centric learning, and faculty development go hand in hand. Our faculty are encouraged to engage in continuous research, participate in academic collaborations, and contribute to consultancy and industry-linked projects. These initiatives not only enhance their academic contributions but also bring real-world insights into the classroom, significantly benefiting our students’ overall educational journey.
      </p>
      <button className='' onClick={handleNavigate}>Faculty Members</button>
    </div>
  )
}

export default Faculty