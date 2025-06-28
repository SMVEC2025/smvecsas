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
import { Helmet } from 'react-helmet'
function Chemistry() {
  const page = "Chemistry"
  const aboutData={
    heading:`Department of ${page}`,
    url:'chemistry',
    image:'https://img.freepik.com/free-vector/set-science-equipments_1308-36491.jpg',
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"/assets/img/department/hod/chemistry.webp",
    name:"Dr.S.Savithri",
    message:"Welcome to Department of Chemistry, was established in 2020. The Department seeks to combine excellence in education with service to the industry. Our vision is an innovative and leading Department to provide students with a balance of intellectual and practical experiences that enable them to serve a variety of societal needs. In our department students are nurtured to become best professional as Project Managers and also employed in research and chemical Industry or become Entrepreneurs in their own innovative way. We are having hard-working students, a young and dynamic faculty, whose expertise spans the range of disciplines in chemical science stream and a very healthy work-culture, are the basic elements that comprise the Department of Chemistry, the hub of the institute’s academia. We hold firm belief in our ability to succeed, and we nurture an attitude of self-reliance, confidence, commitment and responsibility to the motherland that we are to serve. I am confident that the students of the department would justify the credibility of the department by showing a high level of professional competence in their respective field."
  }
  
  const MissionData ={
    mission:"To develop the department as world class centre of excellence in all aspects of higher education and research with an expertise in chemical sciences.",
    vision:"To inculcate quality inter-disciplinary training to improve the welfare of humanity."
  }
  return (
   <>
   <Helmet>
        <title>Chemistry | SMVEC SAS</title>
        <meta name="description" content="Start your carreer today in chemistry" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </Helmet>
    <Home title={`Department of ${page}`} image='/assets/img/department/chemistry.webp'/>
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision  missionData={MissionData}/>
    <Program programDetail={programDetails}/>
    <Faculty dept="chemistry"/>
    <HomeNewsAndEvents title="SMVEC Events" dept="chemistry"  eventurl="/events/chemistry"/>
    <HomeCta/>
   </>
  )
}

export default Chemistry