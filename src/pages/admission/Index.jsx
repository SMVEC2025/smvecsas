import React from 'react'
import Form from '../../components/form/Form'
import Navbar from '../../components/header/Navbar'
import TopHeader from '../../components/header/TopHeader'
import Footer from '../../components/footer/Footer'
import Highlights from './components/Highlights'
import Programs from './components/Programs'
import SectionTwo from '../about/component/SectionTwo'
 
function Index() {
  return (
   <>
   
    <div className='admission_main'>
       <div className='af_main'>
        <Form/>
       </div>
    </div>
    <SectionTwo/>

    <Highlights/>
    <Programs/>
    
    
   </>
  )
}

export default Index