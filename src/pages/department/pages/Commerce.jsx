import React, { useContext, useEffect } from 'react'
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
import { AppContext } from '../../../context/AppContext'
import { HelmetProvider, Helmet } from 'react-helmet-async';

function Commerce() {
  const {currentPage,setCurrentPage}=useContext(AppContext)
  const page = "commerce"
  const aboutData={
    heading:`Department of ${page}`,
    url:'commerce',
    image:'https://img.freepik.com/free-photo/business-handshake-with-world-map-background_23-2151966701.jpg',
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"/assets/img/department/hod/commerce.webp",
    name:"Ms. M. JANAKIRAMA",
    message:"Welcome to the PG Department of Commerce! We are excited to have you join our community of learners. Our Department is committed to providing Quality Education in Commerce through modern technology based teaching learning practices.Im delighted to lead a team of highly qualified and experienced faculty members dedicated to imparting knowledge and skills in commerce. Our programs are designed to equip students with the expertise and competencies required to excel in the dynamic world of commerce."
  }
  useEffect(() => {
    setCurrentPage(page)
  }, [])
  

  const MissionData ={
    mission:"“To be a Center of Excellence in Commerce Education by offering globally competitive Commerce education to all facets of society,fostering an entrepreneurial culture among students, assisting in the development of business and society, and instilling in students a sense of social responsibility”",
    vision:"“To provide a comprehensive education using State of art infrastructure and Technology with the goal of producing professionals in the fields of Commerce and management, as well as to introduce new programs to close the knowledge gap between the corporate world and higher education by satisfying stakeholder needs.”"
  }
  return (
   <>
       <HelmetProvider>
        <title>Commerce | SMVEC SAS</title>
        <meta name="description" content="Start your carreer today in commrerce" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </HelmetProvider>
    <Home title={`Department of ${page}`} image='/assets/img/department/bcom.webp'/>
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision missionData={MissionData}/>
    <Program programDetail={programDetails}/>
    <Faculty dept="commerce"/>
    <HomeNewsAndEvents title="SMVEC Events"  dept='commerce' eventurl="/events/commerce"/>
    <HomeCta/>
   </>
  )
}

export default Commerce