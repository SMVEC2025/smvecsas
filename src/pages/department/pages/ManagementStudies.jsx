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
function ManagementStudies() {
  const page = "business studies"
  const aboutData={
    heading:`Department of ${page}`,
    image:'https://img.freepik.com/free-vector/financial-business-world-successful-management-concept_1284-5601.jpg',
    para:"The Department of business studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"/assets/img/department/hod/business.png",
    name:"Dr. Bala Sendhil Kumar G",
    message:"The Department of Business Studies is a dynamic academic unit offering a wide range of programmes including B.Com (Corporate Secretaryship), B.Com (Computer Applications), BBA (General), and BBA (FinTech and Digital Banking). These programmes are thoughtfully curated to provide students with both foundational and advanced knowledge, integrating real-world relevance and future-ready competencies. At the heart of our department lies a strong ethical vision - a vision rooted in discipline, commitment to learning, and value-based education. While we deliver a robust curriculum tailored to the evolving needs of the industry and society, we firmly believe that discipline is the backbone of academic excellence and personal growth. Discipline nurtures focus, and focus fuels achievement. We instil this spirit among our students to ensure they not only gain academic knowledge but also develop a strong character and sense of responsibility.Each programme we offer is designed with a dual objective to empower students with skills and knowledge, and to shape them as responsible citizens who contribute meaningfully to society and the nation. Our curriculum is interwoven with modules that enhance critical thinking, ethical decision-making and innovation. "
  }

  const missionData ={
  mission:"To explore value-based Accounting and Management Education through innovative and flexible curriculum that enables to decipher and adapt in multidisciplinary academic and research environments and the society at large.",
    vision:"The program focuses on transforming lives through knowledge creation and sharing, while promoting collaborative and experiential learning. It emphasizes professional development, career growth, and continuous improvement through stakeholder engagement and strong industry connections."
  }
  return (
   <>
    <Home title={`Department of ${page}`} image='/assets/img/department/business.png'/>
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision missionData={missionData}/>
    <Program programDetail={programDetails}/>
    <Faculty dept="businessstudies"/>
    <HomeNewsAndEvents title="SMVEC Events" dept="businessstudies"  eventurl="/events"/>
    <HomeCta/>
   </>
  )
}

export default ManagementStudies