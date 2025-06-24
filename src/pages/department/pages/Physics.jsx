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
function Physics() {
  const page = "physics"
  const aboutData = {
    heading: `Department of ${page}`,
    url:'physics',
    image: 'https://img.freepik.com/free-vector/science-symbols-white-paper_1308-33294.jpg',
    para: "The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails = ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData = {
    image: "/assets/img/department/hod/physics.png",
    name: "Dr.T.Jayavarthanan",
    message: "Vinayagar Engineering College.Physics serves as the cornerstone of all natural sciences and plays a pivotal role in shapingthe technologies and innovations of tomorrow. At our department, we are dedicated to excellence in teaching, research and hands-on learning. We offer both undergraduate and postgraduate programs that provide students with a solid theoretical foundation, practical competencies and the confidence to pursue careers in academia, industry and scientific research.Our faculty members are passionate educators and active researchers, contributing to a wide range of fields including condensed matter physics, spectroscopy, nanoscience, astrophysics and medical physics. To enhance student engagement beyond the classroom, we regularly organize workshops,seminars, science exhibitions, international conferences and sky-watching events, fostering both knowledge and curiosity.We take pride in nurturing an environment where students are encouraged to think critically, explore independently and embrace lifelong learning. Our well-equipped laboratories, strong academic resources and committed mentorship ensure that every learner is prepared to meet the challenges of a rapidly evolving scientific world."
  }
  const missionData = {
    mission: "To excel in quality-driven science education by inspiring young minds with innovative ideas,fostering a scientific temperament, and nurturing a deep sense of social responsibility among students.",
    vision: "The program strives to provide comprehensive education using state-of-the-art infrastructure and technology to develop professionals in commerce, management, and physics. It bridges the gap between academia and industry while promoting higher studies, global standards, ethical values, and social responsibility."
  }
  return (
    <>
      <Home title={`Department of ${page}`} image='/assets/img/department/physics.png' />
      <About data={aboutData} />
      <HodSection HodData={HodData} />
      <MissionVision missionData={missionData} />
      <Program programDetail={programDetails} />
      <Faculty dept="physics" />
      <HomeNewsAndEvents title="SMVEC Events"  dept="physics" eventurl="/events/physics" />
      <HomeCta />
    </>
  )
}

export default Physics