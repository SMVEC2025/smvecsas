import React from 'react'
import Form from '../../components/form/Form'
import Navbar from '../../components/header/Navbar'
import TopHeader from '../../components/header/TopHeader'
import Footer from '../../components/footer/Footer'
import Highlights from './components/Highlights'
import Programs from './components/Programs'
import SectionTwo from '../about/component/SectionTwo'
import { HelmetProvider, Helmet } from 'react-helmet-async';


function Index() {
  return (
    <>
      <HelmetProvider>
        <title>Admission | SMVEC SAS</title>
        <meta name="description" content="Admission open for arts and science start your carreer today" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </HelmetProvider>
      <div className='admission_main'>
        <div className='af_main'>
          <Form />
        </div>
      </div>
      <SectionTwo />

      <Highlights />
      <Programs />


    </>
  )
}

export default Index