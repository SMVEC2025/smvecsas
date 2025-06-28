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
function MediaStudies() {
  const page = "Media Studies"
  const aboutData={
    heading:`Department of ${page}`,
    url:'mediastudies',
    image:'https://img.freepik.com/free-photo/press-reporter-fallowing-leads-case_23-2149579746.jpg',
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"/assets/img/department/hod/media.webp",
    name:"Mrs. R. Rajeswari",
    message:"In a world driven by narratives, we believe in the transformative power of media to inform,inspire, and ignite change. Our department is more than a place of learning, it’s a vibrant creative hub where ideas come to life, voices find their strength, and the media professionals oftomorrow take root. Whether your passion lies in journalism, filmmaking, digital media,advertising, or research, we offer a dynamic curriculum, immersive hands-on training, and a nurturing environment designed to help you thrive. With experienced faculty, strong industry ties, and cutting-edge facilities, we prepare you not just to navigate the media landscape but to lead and redefine it. To our students your journey here will challenge you, excite you, and prepare you for an ever-evolving media world. To future learners we invite you to discover the limitless possibilities that await in the world of media. And to our alumni and industry partners your accomplishments continue to motivate and guide us.Let’s create, critique, and communicate with purpose and passion."
  }
const missionData ={
    mission:"We seek to foster in depth knowledge to the students in the world of media and create development oriented, liable and steadfast media professionals.",
    vision:"The mission is to provide quality training in media, equipping students to make meaningful career choices. It aims to enhance understanding of evolving media trends while fostering technical skills, rational creativity, and social awareness through media education."
  }
  
  return (
   <>
    <Home title={`Department of ${page}`}  image='/assets/img/department/viscom.webp'/>
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision missionData={missionData}/>
    <Program programDetail={programDetails}/>
    <Faculty dept="mediastudies"/>
    <HomeNewsAndEvents title="SMVEC Events"  dept="mediastudies" eventurl="/events/mediastudies"/>
    <HomeCta/>
   </>
  )
}

export default MediaStudies