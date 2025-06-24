import React from 'react'

function Highlights() {
    const universityHighlights = [
  { title: "Students Got Placed Last Year", value: "650+" },
  { title: "Students Placed Since Inception", value: "4,500+" },
  { title: "Lakhs as Highest Salary per Annum", value: "18" },
  { title: "Students Benefited by Scholarship Since Inception", value: "5,000+" },
  { title: "Center of Excellence", value: "16" },
  { title: "UG Programmes", value: "22" },
  { title: "PG Programmes", value: "5" },
  { title: "KW Solar Powered Green Campus", value: "500 KW" },
  { title: "MoUs & Industry Institute Interaction", value: "50" },
  { title: "Industrial Tie-ups", value: "50+" },
  { title: "National/MNC Competition Achievements", value: "100+" },

];
  return (
    <div className='highlights_main'>
        {universityHighlights?.map((highlight,index)=>(
            <div key={index}>
                <h4>{highlight.value}</h4>
                                <h2>{highlight.title}</h2>

            </div>
        ))}
    </div>
  )
}

export default Highlights