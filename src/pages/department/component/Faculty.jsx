import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';

function Faculty({dept}) {
  const navigate = useNavigate();
  const handleNavigate=()=>{
     navigate(`/faculty/${dept}`)
  }
  return (
    <div className='container dept-faculty-main'>
        <Header title="faculty"/>
        <p>Teaching environment and quality are central to SRMIST’s capabilities profile. Our Professors are the reason for our continued ability to foster vibrant and value adding learning experiences for our students. The success of our students’ in terms of their learning and overall development enabled by our faculty members is an area of focus of Leadership at SRMIST. Many opportunities are provided to our faculty members to conduct research and engage with the industry in consultancy and other projects. This platform brings our faculty members an opportunity to expand their knowledge contribution as well as bring those rich experiential inputs to the classrooms, and labs, therefore benefiting our students.

</p>
        <button className='' onClick={handleNavigate}>Faculty Members</button>
    </div>
  )
}

export default Faculty