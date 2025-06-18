import React from 'react'
import About from '../department/component/About'
import PlacementStats from './component/PlacementStats'
import PlacementReport from './component/PlacementReport'
import Header from '../../components/Header'
import TopRecruiters from './component/TopRecruiters'
import Alumini from './component/Alumini'
function Index() {
  const data = {
    heading: `SMVEC PLACEMENT`,
    image: 'https://img.freepik.com/free-photo/biologist-researcher-analyzing-biological-slide-agriculture-expertise-using-microscope_482257-4595.jpg',
    para: "The Department of Professional Studies at Sri Manakula Vinayagar Engineering College is a hub for excellence in career-focused education, designed to align students with industry standards and future career paths. Established with the vision to offer programs that combine academic rigor with real-world applicability, the department empowers students through a curriculum that integrates professional certifications, experiential learning, and industry exposure.At SMVEC, the Department of Professional Studies offers specialized undergraduate programs that blend foundational knowledge in arts and science with professional disciplines like Business Analytics, Digital Marketing, FinTech, Data Science, Aviation, Hospitality Management, and more. The programs are structured to meet the needs of today’s fast-evolving job markets, where interdisciplinary skills and adaptability are crucial."
  }
   const partners = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png",
        "https://mma.prnewswire.com/media/1953706/Integra_Logo.jpg?p=facebook",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb3-triq81EGt_qghnuLhJXg9i9JcO3Xwog&s",

        "https://getvectorlogo.com/wp-content/uploads/2019/01/sutherland-global-services-vector-logo.png",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV6C8ePsFoRjppsDhjXY2ifABMWlu0UgWjQ&s",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO0YBBxvGNQJdn_2u-so8MsdL0ostWy-EsQ&s",

        "",

        "",

        "",

        "",


    ]
  return (

    <div className='placement-main'>
      
      <div className='ug-about'>
        <div className='left'>
          <img src='/assets/img/placement/aboutimage.png' alt="" />
        </div>
        <div className='right'>
          <h3>{data.heading}</h3>
          <p>

            The college has a placement cell that helps students find jobs after graduation. The cell works with companies to bring job opportunities to campus and helps students prepare for interviews.
            The placement cell also provides training and workshops to help students develop the skills they need to succeed in the workplace. This includes training on communication, teamwork, and problem-solving. The placement cell also helps students sign MOUs with reputed organizations and universities. This allows students to gain valuable experience through internships and exchange programs.
            The Placement division functions round the clock throughout the year. It establishes contacts with reputed multinational companies, core industries, R & D organizations and also plays an important role in locating various job opportunities and placing large number of our students.
          </p>

        </div>
      </div>
      <PlacementStats />
      <PlacementReport /> 
      <TopRecruiters/>  
      <Alumini/>
     

    </div>
  )
}

export default Index