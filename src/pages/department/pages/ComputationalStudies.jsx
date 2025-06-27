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
function ComputationalStudies() {
  const page = "computational studies"
  const aboutData={
    heading:`Department of ${page}`,
    url:'computationalstudies',
    image:'https://img.freepik.com/free-photo/scientific-specialist-research-lab-wearing-vr-goggles-using-high-tech-equipment-wired-sensors-medical-study-healthcare-practitioner-using-virtual-reality-technology-visualize-datasets_482257-67903.jpg',
    para:"The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
  const programDetails=ProgramData?.filter(program => program.department.toLocaleLowerCase() == page.toLocaleLowerCase())
  const HodData={
    image:"/assets/img/department/hod/cs.png",
    name:"Dr. N. MOGANARANGAN",
    message:"It gives me immense pleasure to welcome you to the PG Department of Computational Studies.Since its inception in 2020, our department has been committed to fostering academic excellence and preparing students to become visionaries and changemakers in the field of computer science. With an initial intake of 100 students (B.Sc. CS and BCA), we have grown significantly and currently offer a vibrant academic ecosystem for 270 students across programs including B.Sc. Computer Science, BCA, B.Sc. Data Science & Analytics, and M.Sc. Computer Science.Our department is home to a team of dedicated and highly qualified faculty members who strive to deliver holistic and industry-relevant education. The curriculum is carefully designed to offer a balance of theoretical foundations and hands-on experience, covering core computer science concepts and cutting-edge technologies such as Artificial Intelligence, Machine Learning, Big Data Analytics, IoT, Blockchain, Cyber Security, Data Mining, and Open-Source Technologies. We also emphasize essential competencies like Professional Ethics and Research Methodologies to shape well-rounded professionals.Our students have actively participated in prestigious workshops and events hosted by premier institutions like IIT Madras, IIT Kottayam, and IIT Hyderabad, showcasing their talent and gaining valuable exposure. We are proud to share that our students have collectively earned over 100+ offer letters, a testament to their hard work and the quality of education imparted in the department.I welcome all aspiring learners to join us and be part of a thriving academic community that encourages innovation, collaboration, and excellence. Together, let us shape the future of technology."
  }
    const missionData ={
    mission:"To come up with successfully as a high-quality human capital in Computer Science and related areas for the sustainable growth of the IT industry needs of the country.",
    vision:"The program aims to ensure a deeper understanding of fundamental concepts while fostering innovative skills within core areas of Computer Science. It is dedicated to producing highly skilled and motivated graduates capable of effective problem-solving both individually and collaboratively. Additionally, the program emphasizes a strong awareness of ethical responsibilities toward the profession and society."
  }
  return (
   <>
    <Home title={`Department of ${page}`}  image='/assets/img/department/computational.webp' />
    <About data={aboutData}/>
    <HodSection HodData={HodData}/>
    <MissionVision missionData={missionData}/>
    <Program programDetail={programDetails}/>
    <Faculty dept="computationalstudies"/>
    <HomeNewsAndEvents title="SMVEC Events" dept="computationalstudies" eventurl="/events/computationalstudies"/>
    <HomeCta/>
   </>
  )
}

export default ComputationalStudies