import React from 'react'
import Home from '../component/Home'
import Footer from '../../../components/footer/Footer'
import About from '../component/About'
import Program from '../../home/component/Program'
import HomeCta from '../../home/component/HomeCta'
import HomeNewsAndEvents from '../../home/component/HomeNewsAndEvents'
import MissionVision from '../component/MissionAndVision'
import Navbar from '../../../components/header/Navbar'
import HodSection from '../component/HodSection'
import Faculty from '../component/Faculty'
import { ProgramData } from '../../../data/ProgramData'
function French() {
  const page = "French"
  const aboutData={
    heading:`Department of ${page}`,
    image:'https://img.freepik.com/free-photo/flag-france_1401-114.jpg',
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/5-1-scaled.jpg",
    name:"Dr. Kavitha A",
    message:"The Department of Commerce has consistently improved its academic, research, and placement success. It provides a variety of innovatively created programs, with curricula that are continually updated to meet the changing needs of the industry and main stakeholders. Students are encouraged to participate in Internships and micro Projects as part of their curriculum to enhance their academic knowledge with real-world experience and are motivated to conduct and participate in events and get involved in activities of social relevance. With such inputs, our students are hardworking, practical-oriented, and effective in any work environment. The distinguished faculty members combine their academic excellence and real-world experience with dedication and commitment. I welcome you to be a part of our journey towards being a world-class center of excellence in education and research."
  }
  return (
   <>
    <Home title={`Department of ${page}`}/>
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision/>
    <Program programDetail={programDetails}/>
    <Faculty dept="Department of Basic Sciences"/>
    <HomeNewsAndEvents title="SMVEC Events"  eventurl="/events"/>
    <HomeCta/>
   </>
  )
}

export default French