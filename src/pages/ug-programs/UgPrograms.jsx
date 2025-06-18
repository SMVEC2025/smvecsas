import React, { useEffect } from 'react'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import UndergraduateArea from './component/UndergraduateArea'
import AboutTwo from './component/AboutTwo'
import UGProgramsTable from './component/UGProgramsTable'
import HomeCta from '../home/component/HomeCta'
import Footer from '../../components/footer/Footer'
import { ProgramData } from '../../data/ProgramData'
function UgPrograms() {

 const underGraduatePrograms = ProgramData.filter((e => e.category =="UG"));
 const postGraduatePrograms = ProgramData.filter((e => e.category =="PG"));
  return (
    <>
     <BreadcrumbTwo title="Programs" subtitle="Programs"/>
      <AboutTwo spacing="pt-90 "/>
     
      <UGProgramsTable data={underGraduatePrograms} category="UG"  />
      <HomeCta/>
      
    </>
  )
}

export default UgPrograms