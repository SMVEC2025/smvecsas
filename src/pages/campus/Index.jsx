import React from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Facilities from './component/Facilities'
import Test from '../home/component/Test'

function Index() {
  return (
    <>
    
    <BreadcrumbTwo title="Campus life" subtitle="campus life"/>
    <Facilities/>
      
    </>
  )
}

export default Index