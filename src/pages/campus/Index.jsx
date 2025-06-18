import React from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Facilities from './component/Facilities'

function Index() {
  return (
    <>
    
    <BreadcrumbTwo title="Campus life" subtitle="campus life"/>
    <Facilities/>
    
    </>
  )
}

export default Index