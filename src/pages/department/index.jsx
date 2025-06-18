import React from 'react'
import Home from './component/Home'
import Footer from '../../components/footer/Footer'
import About from './component/About'
import Program from '../home/component/Program'
import HomeCta from '../home/component/HomeCta'
import HomeNewsAndEvents from '../home/component/HomeNewsAndEvents'
import MissionVision from './component/MissionAndVision'
import Navbar from '../../components/header/Navbar'

function index() {
  return (
   <>
   
    <Home/>
    <About/>
    <MissionVision/>
    <Program/>
    <HomeNewsAndEvents/>
    <HomeCta/>
    
   </>
  )
}

export default index