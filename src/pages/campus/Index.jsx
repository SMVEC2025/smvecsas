import React from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Facilities from './component/Facilities'
import Test from '../home/component/Test'
import { Helmet } from 'react-helmet'

function Index() {
  return (
    <>
       <Helmet>
        <title>Campus Life | SMVEC SAS</title>
        <meta name="description" content="Explore our campus life" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </Helmet>
    <BreadcrumbTwo title="Campus life" subtitle="campus life"/>
    <Facilities/>
      
    </>
  )
}

export default Index