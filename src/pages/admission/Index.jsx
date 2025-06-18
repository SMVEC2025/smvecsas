import React from 'react'
import Form from '../../components/form/Form'
import Navbar from '../../components/header/Navbar'
import TopHeader from '../../components/header/TopHeader'
import Footer from '../../components/footer/Footer'
import Highlights from './components/Highlights'

function Index() {
  return (
   <>
   
    <div className='admission_main'>
       <div className='af_main'>
        <Form/>
       </div>
    </div>
    <Highlights/>
    
   </>
  )
}

export default Index