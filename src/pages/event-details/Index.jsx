import React, { useContext, useEffect, useState } from 'react'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import CourseDetailSection from './component/CourseDetailSection'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom';

function Index() {
      const { slug } = useParams();
    const {events,isLoading} =useContext(AppContext)
    const [filteredEvents,setFilteredEvents] = useState()
   console.log(isLoading)
   useEffect(() => {
    if(isLoading == false){
        console.log("opening...")
         const filteredevents = events.filter((e)=> e.slug == slug)
     setFilteredEvents(filteredevents)
    }
   }, [isLoading])
  console.log(events)
  console.log("filteredEvents",filteredEvents)

    return (
        <>
            <BreadcrumbTwo />
            {filteredEvents?(
                <CourseDetailSection event={filteredEvents?filteredEvents:null} />
            ):"no events"}
        </>  
    )
}

export default Index