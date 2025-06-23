import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/header/Navbar'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import AllEventSection from './components/AllEventSection'
import './styles/Event.css'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'


function Index() {
  const { events } = useContext(AppContext)
  const { dept } = useParams();
  const [filteredEvents,setFilteredEvents] = useState([events])
   useEffect(() => {
      if(dept != 'all'){
    const filteredData = events.filter((e)=> e?.acf?.department == dept)
    setFilteredEvents(filteredData)
      }else{
        setFilteredEvents(events)
      }
     }, [events]);

  return (
    <>

      <BreadcrumbTwo title="Events" subtitle="Events" />
      <AllEventSection eventData={filteredEvents} />

    </>
  )
}

export default Index