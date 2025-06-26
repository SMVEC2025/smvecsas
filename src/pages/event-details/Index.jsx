import React, { useContext, useEffect, useState } from 'react'
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb'
import CourseDetailSection from './component/CourseDetailSection'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom';

function Index() {
      const { slug } = useParams();
    const {events,isLoading} =useContext(AppContext)
    const [filteredEvents,setFilteredEvents] = useState()
   useEffect(() => {
    if(isLoading == false){
         const filteredevents = events.filter((e)=> e.slug == slug)
     setFilteredEvents(filteredevents)
    }
   }, [isLoading])

    return (
        <>
            <BreadcrumbTwo title={filteredEvents? filteredEvents[0].acf.name:"Events"} subtitle="Events" />
            {filteredEvents?(
                <CourseDetailSection event={filteredEvents?filteredEvents:null} />
            ):"no events"}
        </>  
    )
}

export default Index