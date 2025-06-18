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
    return (
        <>
            <BreadCrumb title="About"
                subtitle="About" />
            <About />
            <SectionTwo />
                        <MissionVision/>
            <Dean/>
            <BoardMembers/>
            <HomeCta />
        </>
    )
}

export default Index