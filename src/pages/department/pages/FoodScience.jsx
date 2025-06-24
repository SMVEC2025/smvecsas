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
function FoodScience() {
  const page = "Food Science"
  const aboutData={
    heading:`Department of ${page}`,
    url:'foodscience',
    image:'https://img.freepik.com/free-photo/closeup-chemist-scientist-injecting-organic-tomato-with-pesticides-gmo-test_482257-2125.jpg',
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"/assets/img/department/hod/foodscience.png",
    name:"Dr. T. Kavitha",
    message:"Welcome to the Department of Food Science and Nutrition at SMVEC School of Arts and Science. Our mission is multifaceted to empower individuals with nutrition knowledge, develop innovative functional food products and conduct sustainable research practice all aimed at enhancing their skills in various facets of Nutrition and Food Science. Our college has a rich history of providing quality education and we are proud to continue that legacy. Our department stands out for its comprehensive curriculum, integrating theoretical knowledge with hands-on experience in our well-equipped labs and through various projects. Furthermore, our dedicated faculty, with their diverse expertise, are committed to providing a supportive and inclusive learning environment for all the student. I am confident that with our collective efforts, we will achieve our goals and continue to make significant contributions to the field of Food Science and Nutrition.  "
  }
  const missionData ={
    mission:"We seek to provide in depth knowledge about Nutrition and Dietetics and enable the students in understanding nutritional strategies and acquire skills in planning diet therapy. ",
    vision:"The program offers quality training in nutrition and dietetics, blending practical health applications with entrepreneurial readiness. It also fosters technical skills to keep academics socially and technologically relevant."
  }
  return (
   <>
    <Home title={`Department of ${page}`} image='/assets/img/department/foodscience.png'/>
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision missionData={missionData}/>
    <Program programDetail={programDetails}/>
    <Faculty dept="foodscience"/>
    <HomeNewsAndEvents title="SMVEC Events" dept="foodscience"  eventurl="/events/foodscience"/>
    <HomeCta/>
   </>
  )
}

export default FoodScience