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
import { Helmet } from 'react-helmet'
function Index() {
      const MissionData ={
    mission:"“To provide holistic, interdisciplinary education that fosters critical thinking, creativity, and ethical values. It prepares students for meaningful careers, research, and responsible global citizenship.”",
    vision:"“To be a centre of academic excellence that blends creativity, scientific inquiry, and human values to shape socially responsible global citizens.”"
  }
    return (
        <>
        <Helmet>
        <title>About Us | SMVEC SAS</title>
        <meta name="description" content="Learn More about us" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </Helmet>
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