import React from 'react'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import Navbar from '../../components/header/Navbar'
import About from './component/About'
import SectionTwo from './component/SectionTwo'
import HomeCta from '../home/component/HomeCta'
import Footer from '../../components/footer/Footer'
import Campuses from './component/Campuses'
import MissionVision from '../department/component/MissionAndVision'
import BoardMembers from './component/BoardMembers'
import Dean from './component/Dean'
function Index() {
      const MissionData ={
    mission:"“To be a Center of Excellence in Commerce Education by offering globally competitive Commerce education to all facets of society,fostering an entrepreneurial culture among students, assisting in the development of business and society, and instilling in students a sense of social responsibility”",
    vision:"“To provide a comprehensive education using State of art infrastructure and Technology with the goal of producing professionals in the fields of Commerce and management, as well as to introduce new programs to close the knowledge gap between the corporate world and higher education by satisfying stakeholder needs.”"
  }
    return (
        <>
            <BreadCrumb title="About"
                subtitle="About" />
            <About />
            <SectionTwo />
            <MissionVision missionData={MissionData} />
            <Dean />
            <BoardMembers />
            <HomeCta />
        </>
    )
}

export default Index