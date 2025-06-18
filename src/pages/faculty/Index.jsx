import React from 'react'
import TeamItem from './component/TeamItem';
import BreadcrumbTwo from '../../components/breadcrumb/BreadCrumb';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { facultyData } from '../../data/Faculty';
function Index() {



  return (
    <>
    
    <BreadcrumbTwo title="Faculty"
        subtitle="Faculty"/>

     <section className="tp-event-inner-area tp-event-inner-p pt-100 pb-50">
        <div className="container">
          <div className="row">
            {facultyData.map((item, i) => {
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

export default Index