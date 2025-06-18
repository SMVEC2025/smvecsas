import React from 'react'

function Highlights() {
    const universityHighlights = [
  { title: "University Ranks and Gold Medalists", value: "90+" },
  { title: "Students Got Placed Last Year", value: "650+" },
  { title: "Students Placed Since Inception", value: "4,500+" },
  { title: "Lakhs as Highest Salary per Annum", value: "18" },
  { title: "'A' Grade by NAAC (with 3.19 CGPA)", value: "A" },
  { title: "Students Benefited by Scholarship Since Inception", value: "5,000+" },
  { title: "Center of Excellence", value: "16" },
  { title: "UG Programmes", value: "11" },
  { title: "PG Programmes", value: "4" },
  { title: "Gold Medalists", value: "69" },
  { title: "KW Solar Powered Green Campus", value: "500 KW" },
  { title: "Research Publications", value: "1,000" },
  { title: "MoUs & Industry Institute Interaction", value: "50" },
  { title: "Industrial Tie-ups", value: "50+" },
  { title: "National/MNC Competition Achievements", value: "100+" },
  { title: "India Today Ranking", value: "200+" },
  { title: "'AAA' Career 360 Ranking", value: "AAA" },
  { title: "Ph.D Programmes", value: "1" }
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