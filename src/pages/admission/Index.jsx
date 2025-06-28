import React from 'react'
import Form from '../../components/form/Form'
import Navbar from '../../components/header/Navbar'
import TopHeader from '../../components/header/TopHeader'
import Footer from '../../components/footer/Footer'
import Highlights from './components/Highlights'
import Programs from './components/Programs'
import SectionTwo from '../about/component/SectionTwo'
import { Helmet } from 'react-helmet'

function Index() {
  return (
    <>
      <Helmet>
        <title>Admission | SMVEC SAS</title>
        <meta name="description" content="Admission open for arts and science start your carreer today" />
        {/* <link rel="icon" href="/favicon-new.ico" /> */}
      </Helmet>
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