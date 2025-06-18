import React, { useContext } from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import AllEventSection from './components/AllEventSection'
import './styles/Event.css'
import { AppContext } from '../../context/AppContext'


function Index() {
    const {events} = useContext(AppContext)
 
  return (
    <>
    
    <BreadcrumbTwo title="Events" subtitle="Events"/>
    <AllEventSection eventData={events}/>
    
    </>
  )
}

export default Index