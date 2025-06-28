import React from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Facilities from './component/Facilities'
import Test from '../home/component/Test'
import { HelmetProvider, Helmet } from 'react-helmet-async';


function Index() {
  return (
    <>
       <HelmetProvider>
        <title>Campus Life | SMVEC SAS</title>
        <meta name="description" content="Explore our campus life" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </HelmetProvider>
    <BreadcrumbTwo title="Campus life" subtitle="campus life"/>
    <Facilities/>
      
    </>
  )
}

export default Index