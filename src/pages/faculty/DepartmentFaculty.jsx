import React, { useEffect, useState } from 'react'
import TeamItem from './component/TeamItem';
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { facultyData } from '../../data/Faculty';
function DepartmentFaculty() {
 const { dept } = useParams();
    const decodedDept = decodeURIComponent(dept);
    const [filteredDepartment, setFilteredDepartment] = useState([])
   


    useEffect(() => {
        const filter = facultyData.filter(faculty => faculty.department == decodedDept)
        setFilteredDepartment(filter)
    }, [])



  return (
    <>
    
    <BreadcrumbTwo title={`Faculty of ${decodedDept}`}
        subtitle={`Faculty of ${decodedDept}`}/>

     <section className="tp-event-inner-area tp-event-inner-p pt-100 pb-50">
        <div className="container">
          <div className="row">
            {filteredDepartment?.map((item, i) => {
              const delay = i > 9 ? "0.1s" : `.${(i + 1) * 0.1}s`;
              return (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                  data-wow-delay={delay}
                >
                  <TeamItem item={item} instructor={true} />
                </div>
              );
            })}
          </div>
        </div>
      </section> 
      
    </>
   
       )
}

export default DepartmentFaculty